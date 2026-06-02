import type { Entity } from "@/types/ui.interface";

interface GetSearchParamsInputs {
	limit?: string;
	orderBy?: string;
	page?: string;
	q?: string;
	route: Entity;
}

/**
 * Transform and validate received search params.
 */
export function getSearchParams({
	limit,
	orderBy,
	page,
	q,
	route,
}: GetSearchParamsInputs) {
	/**
	 * Page param (default 1)
	 */
	const pageParam = Number(page) || 1;

	/**
	 * Limit param (default 25)
	 */
	const limitParam = Number(limit) || 25;

	/**
	 * Sort param (default `nameAsc` ex `lastNameAsc` for people route)
	 */
	const sortParam = orderBy || (route === "people" ? "lastNameAsc" : "nameAsc");

	/**
	 * Get tags
	 */
	// const tagsArr = search
	// 	.slice(1)
	// 	.split("&")
	// 	.filter((param) => param.slice(0, 3) === "tag");

	// Remove `tag=`
	// const tags = tagsArr.map((param) => param.slice(4)).sort();
	// const tagsParamString = `&${tagsArr.join("&")}`;

	return {
		pageParam,
		limitParam,
		searchParam: q,
		sortParam,
		// tags,
		// tagsParamString,
	};
}
