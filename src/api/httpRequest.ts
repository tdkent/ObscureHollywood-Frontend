import { BACKEND_URL } from "@/constants/api.constants";
import type { OptionsInput } from "@/types/ui.interface";

type ReqOptions = RequestInit | undefined;

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function httpRequest(
	path: string,
	optionsInput?: OptionsInput,
) {
	let options: ReqOptions;

	if (optionsInput) {
		options = {
			method: optionsInput.method,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(optionsInput.body),
		};
	}

	try {
		await delay(800);
		const response = await fetch(`${BACKEND_URL}${path}`, options);
		const data = await response.json();

		if (!response.ok) {
			if (typeof data === "object" && data.message) {
				throw new Error(data.message as string);
			}
		}

		return data;
	} catch (error) {
		if (error instanceof Error) throw new Error(error.message);
		throw new Error("An unknown error occurred.");
	}
}
