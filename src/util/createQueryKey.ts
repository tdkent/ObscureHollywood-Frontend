interface Inputs {
	limitParam: number;
	pageParam: number;
	route: string;
	searchParam?: string;
	sortParam: string;
	tagsParam?: string[];
}

interface ParamsObj {
	[key: string]: number | string | string[];
}

export function createQueryKey({
	limitParam,
	pageParam,
	route,
	searchParam,
	sortParam,
	tagsParam,
}: Inputs) {
	const paramsObj: ParamsObj = {
		page: pageParam,
		limit: limitParam,
		orderBy: sortParam,
	};

	if (searchParam) paramsObj.search = searchParam;

	if (tagsParam?.length) paramsObj.tagsParam = tagsParam;

	const queryKey = [route, paramsObj];

	return queryKey;
}
