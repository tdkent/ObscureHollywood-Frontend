import DOMPurify from "dompurify";
import parse, { type HTMLReactParserOptions } from "html-react-parser";
import { Link } from "react-router";
import Image from "@/components/shared/Image";

interface Props {
	htmlContent: string;
}

export default function ParsedHtml({ htmlContent }: Props) {
	const html = DOMPurify.sanitize(htmlContent, {
		USE_PROFILES: { html: true },
	})
		// Filter out escapes
		.replaceAll(`\\"`, `"`);

	const options: HTMLReactParserOptions = {
		replace(domNode) {
			if (domNode.type === "tag" && domNode.name === "a") {
				const href = domNode.attribs?.href;
				const children = domNode.children[0];

				let text = "";

				// Check if text is wrapped by <cite> tag, e.g. <a><cite>Text</cite</a>
				const isFilmTitle = children.type === "tag" && children.name === "cite";

				if (isFilmTitle) {
					const grandchildren = children.children[0];
					if (grandchildren.type === "text") {
						text = grandchildren.data;
					}
				}

				// Text is child of <a> tag, e.g. <a>Text</a>
				else if (children.type === "text") {
					text = children.data;
				}
				// Fallback text
				else text = "UNKNOWN TEXT";

				// Check if link is member of 'link-list' class element
				// const isLinkList =
				// 	(domNode.parent?.parent?.type === "tag" &&
				// 		domNode.parent?.parent?.attribs.class === "link-list") ||
				// 	(domNode.parent?.parent?.parent?.type === "tag" &&
				// 		domNode.parent?.parent?.parent?.attribs.class === "link-list");

				return (
					<Link className="content-link" to={href}>
						{isFilmTitle ? <cite>{text}</cite> : text}
					</Link>
				);
			}

			if (domNode.type === "tag" && domNode.name === "img") {
				const slug = domNode.attribs?.src;

				return (
					<Image
						altText={slug}
						containerStyles="border sm:my-2 lg:object-bottom lg:w-3/4 xl:w-200"
						sizes="(max-width: 1024px) 100vw, (max-width: 1170px) 75vw, 800px"
						slug={slug}
					/>
				);
			}
		},
	};

	const parsedHtml = parse(html, options);

	return parsedHtml;
}
