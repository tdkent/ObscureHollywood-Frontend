import DOMPurify from "dompurify";
import parse, { type HTMLReactParserOptions } from "html-react-parser";
import { Link } from "react-router";

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

				return <Link to={href}>{text}</Link>;
			}
		},
	};

	const parsedHtml = parse(html, options);

	return parsedHtml;
}
