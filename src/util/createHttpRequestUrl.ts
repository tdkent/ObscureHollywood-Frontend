interface Inputs {
	pageParam: number;
	route: string;
	searchParam?: string;
	sortParam: string;
	tagsParam?: string[];
}

export function createHttpRequestUrl({
	pageParam,
	route,
	searchParam,
	sortParam,
	tagsParam,
}: Inputs) {
	const mainReqRoute = route === "search" ? "/articles" : `/${route}`;

	let urlSearchParams = "";

	urlSearchParams += `?page=${pageParam}`;
	urlSearchParams += `&orderBy=${sortParam}`;

	if (searchParam) urlSearchParams += `&q=${searchParam}`;

	if (tagsParam?.length) {
		urlSearchParams += tagsParam.map((tag) => `&tag=${tag}`).join("");
	}

	return `${mainReqRoute}${urlSearchParams}`;
}
