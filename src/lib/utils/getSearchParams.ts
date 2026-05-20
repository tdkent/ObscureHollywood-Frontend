import type { Entity } from "@/types/ui.interface";

interface GetSearchParamsInputs {
	searchParams: URLSearchParams;
	entity: Entity;
	search: string;
}

/**
 * Transform and validate received search params.
 */
export function getSearchParams({
	searchParams,
	entity,
	search,
}: GetSearchParamsInputs) {
	/**
	 * Get page param
	 */
	const pageParam = searchParams.get("page");
	const pageParamNum = Number(pageParam) || 1; // Default = 1

	/**
	 * Get limit param
	 */
	const limitParam = searchParams.get("limit");
	const limitParamNum = Number(limitParam) || 25; // Default = 25

	/**
	 * Get sort param
	 */
	const sortParam = searchParams.get("orderBy");
	const sortParamStr =
		sortParam || (entity === "people" ? "lastNameAsc" : "nameAsc");

	/**
	 * Get search string
	 */
	const searchParam = searchParams.get("q");

	/**
	 * Get tags
	 */
	const tagsArr = search
		.slice(1)
		.split("&")
		.filter((param) => param.slice(0, 3) === "tag");

	// Remove `tag=`
	const tags = tagsArr.map((param) => param.slice(4)).sort();
	const tagsParamString = `&${tagsArr.join("&")}`;

	return {
		page: pageParamNum,
		limit: limitParamNum,
		searchParam,
		sort: sortParamStr,
		tags,
		tagsParamString,
	};
}
