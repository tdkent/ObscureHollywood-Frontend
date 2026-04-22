import { paginatedSortOptions } from "@/lib/paginatedSortOptions";
import type { Entity, SortValue } from "@/types/ui.interface";

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
	const pageParamNum = pageParam ? Number(pageParam) : 1;

	if (pageParam === "0" || !pageParamNum || pageParamNum < 1) {
		throw new Error("Invalid request");
	}

	/**
	 * Get limit param
	 */
	const limitParam = searchParams.get("limit");
	const limitParamNum = limitParam ? Number(limitParam) : 10;

	if (
		limitParam === "0" ||
		!limitParamNum ||
		(limitParamNum !== 10 && limitParamNum !== 25)
	) {
		throw new Error("Invalid request");
	}

	/**
	 * Get sort param
	 */
	const sortParam = searchParams.get("orderBy");

	// Validate sort param
	if (sortParam) {
		const sortOption = paginatedSortOptions.find(
			(sortOption) => sortOption.entity === entity,
		);

		if (!sortOption) {
			throw new Error("Invalid request");
		}

		const isValid = sortOption.options.find(
			(option) => option.value === sortParam,
		);

		if (!isValid) {
			throw new Error("Invalid request");
		}
	}

	let sort: SortValue;

	// Set default value if no sort param present
	if (!sortParam) {
		if (entity === "people") sort = "lastNameAsc";
		else sort = "nameAsc";
	} else {
		sort = sortParam as SortValue;
	}

	/**
	 * Get tags
	 */

	const tags = search
		.slice(1)
		.split("&")
		.filter((param) => param.slice(0, 3) === "tag")
		// Remove `tag=`
		.map((param) => param.slice(4));

	return { page: pageParamNum, limit: limitParamNum, sort, tags };
}
