import { Link } from "@tanstack/react-router";
import parse, { type HTMLReactParserOptions } from "html-react-parser";
import Image from "@/components/image/Image";
import Audio from "@/components/shared/Audio";

interface Props {
	htmlContent: string;
}

export default function ParsedHtml({ htmlContent }: Props) {
	const html = htmlContent.replaceAll(`\\"`, `"`);

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

				return (
					<Link className="content-link" to={href}>
						{isFilmTitle ? <cite>{text}</cite> : text}
					</Link>
				);
			}

			// Parse <img> to Image component
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

			// Parse <audio> to Audio component
			if (domNode.type === "tag" && domNode.name === "audio") {
				const slug = domNode.attribs?.src;

				return <Audio slug={slug} />;
			}
		},
	};

	const parsedHtml = parse(html, options);

	return parsedHtml;
}
