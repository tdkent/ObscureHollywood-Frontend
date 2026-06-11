import type { Entity } from "@/types/ui.interface";

interface GetSearchParamsInputs {
	orderBy?: string;
	page?: string;
	route: Entity;
	tags?: string[];
}

/**
 * Transform and validate received search params.
 */
export function parseSearchParams({
	orderBy,
	page,
	route,
}: GetSearchParamsInputs) {
	/**
	 * Page param (default 1)
	 */
	const pageParam = Number(page) || 1;

	/**
	 * Sort param (default `nameAsc` ex `lastNameAsc` for people route)
	 */
	const sortParam = orderBy || (route === "people" ? "lastNameAsc" : "nameAsc");

	return {
		pageParam,
		sortParam,
	};
}
