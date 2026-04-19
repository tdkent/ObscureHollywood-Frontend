import type { Entity, SortValue } from "@/lib/paginatedSortOptions";
import { paginatedSortOptions } from "@/lib/paginatedSortOptions";

/**
 * Transform and validate received search params.
 */
export function getSearchParams(searchParams: URLSearchParams, entity: Entity) {
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

	return { page: pageParamNum, limit: limitParamNum, sort };
}
