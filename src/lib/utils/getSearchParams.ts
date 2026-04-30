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
		throw new Error("Invalid page URL param");
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
		throw new Error("Invalid limit URL param");
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
			throw new Error("Invalid orderBy URL param");
		}

		const isValid = sortOption.options.find(
			(option) => option.value === sortParam,
		);

		if (!isValid) {
			throw new Error("Invalid orderBy URL param");
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
	 * Get search string
	 */

	const searchParam = searchParams.get("searchString");

	if (searchParam) {
		if (
			entity !== "search" ||
			searchParam.length < 3 ||
			searchParam.length > 64
		) {
			throw new Error("Invalid searchString URL param");
		}
	}

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
		sort,
		tags,
		tagsParamString,
	};
}
