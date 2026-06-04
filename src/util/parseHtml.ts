import parse from "html-react-parser";

export function parseHtmlToString(text: string) {
	const parsed = parse(text.replaceAll(`\\"`, `"`));

	return parsed as string;
}
