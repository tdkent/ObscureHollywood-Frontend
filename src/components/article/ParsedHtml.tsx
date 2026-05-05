import DOMPurify from "dompurify";
import parse, { type HTMLReactParserOptions } from "html-react-parser";
import { Link } from "react-router";

interface Props {
	htmlContent: string;
}

export default function ParsedHtml({ htmlContent }: Props) {
	const html = DOMPurify.sanitize(htmlContent, {
		USE_PROFILES: { html: true },
	});

	const options: HTMLReactParserOptions = {
		replace(domNode) {
			if (
				"name" in domNode &&
				"children" in domNode &&
				"data" in domNode.children[0] &&
				domNode.name === "a"
			) {
				const href = domNode.attribs.href;
				const text = domNode.children[0].data;
				return <Link to={href}>{text}</Link>;
			}
		},
	};

	const parsedHtml = parse(html, options);

	return parsedHtml;
}
