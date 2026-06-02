import type { Entity } from "@/types/ui.interface";

interface Inputs {
	limitParam: number;
	pageParam: number;
	route: Entity;
	searchParam?: string;
	sortParam: string;
	tagsParam?: string[];
}

export function createHttpRequestUrl({
	limitParam,
	pageParam,
	route,
	searchParam,
	sortParam,
	tagsParam,
}: Inputs) {
	const mainReqRoute = route === "search" ? "/articles" : `/${route}`;

	let urlSearchParams = "";

	urlSearchParams += `?page=${pageParam}`;
	urlSearchParams += `&limit=${limitParam}`;
	urlSearchParams += `&orderBy=${sortParam}`;

	if (searchParam) urlSearchParams += `&q=${searchParam}`;

	if (tagsParam?.length) {
		urlSearchParams += tagsParam.map((tag) => `&tag=${tag}`).join("");
	}

	return `${mainReqRoute}${urlSearchParams}`;
}
