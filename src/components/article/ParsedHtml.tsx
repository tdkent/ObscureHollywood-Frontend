import DOMPurify from "dompurify";
import parse, { type HTMLReactParserOptions } from "html-react-parser";
import { ChevronRight } from "lucide-react";
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
				if (children.type === "text") {
					text = children.data;
				}

				// Check if link is member of 'link-list' class element
				const isLinkList =
					domNode.parent?.parent?.type === "tag" &&
					domNode.parent?.parent?.attribs.class === "link-list";

				return (
					<>
						<Link to={href}>{text}</Link>
						{isLinkList && <ChevronRight className="stroke-1 size-4" />}
					</>
				);
			}

			if (domNode.type === "tag" && domNode.name === "img") {
				const slug = domNode.attribs?.src;

				return <Image altText={slug} slug={slug} />;
			}
		},
	};

	const parsedHtml = parse(html, options);

	return parsedHtml;
}
