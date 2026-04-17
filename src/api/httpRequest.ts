import { BACKEND_URL } from "@/constants/api.constants";

export default async function httpRequest(path: string) {
	try {
		const response = await fetch(`${BACKEND_URL}${path}`);
		const data = await response.json();

		if (!response.ok) throw new Error(data as string);

		return data;
	} catch (error) {
		if (error instanceof Error) throw new Error(error.message);
		throw new Error("An unknown error occurred.");
	}
}
