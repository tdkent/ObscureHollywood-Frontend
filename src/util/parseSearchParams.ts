import type { Entity } from "@/types/ui.interface";

interface GetSearchParamsInputs {
	limit?: string;
	orderBy?: string;
	page?: string;
	route: Entity;
	tags?: string[];
}

/**
 * Transform and validate received search params.
 */
export function parseSearchParams({
	limit,
	orderBy,
	page,
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

	return {
		pageParam,
		limitParam,
		sortParam,
	};
}
