import type { Entity } from "@/types/ui.interface";

interface Inputs {
	limitParam: number;
	pageParam: number;
	route: Entity;
	searchParam?: string;
	sortParam: string;
}

export function createHttpRequestUrl({
	limitParam,
	pageParam,
	route,
	searchParam,
	sortParam,
}: Inputs) {
	const mainReqRoute = route === "search" ? "/articles" : `/${route}`;

	let urlSearchParams = "";

	urlSearchParams += `?page=${pageParam}`;
	urlSearchParams += `&limit=${limitParam}`;
	urlSearchParams += `&orderBy=${sortParam}`;

	if (searchParam) urlSearchParams += `&q=${searchParam}`;

	return `${mainReqRoute}${urlSearchParams}`;
}
