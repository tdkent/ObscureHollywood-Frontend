import DOMPurify from "dompurify";
import parse from "html-react-parser";

export function parseHtmlToString(text: string) {
	const html = DOMPurify.sanitize(text, {
		USE_PROFILES: { html: true },
	});

	const parsed = parse(html);

	return parsed as string;
}
