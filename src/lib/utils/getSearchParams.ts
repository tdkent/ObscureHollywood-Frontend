/**
 * Transform and validate received search params.
 */
export function getSearchParams(searchParams: URLSearchParams) {
	// Get page
	const pageParam = searchParams.get("page");
	const pageParamNum = pageParam ? Number(pageParam) : 1;

	if (pageParam === "0" || !pageParamNum || pageParamNum < 1) {
		throw new Error("Invalid request");
	}

	// Get limit
	const limitParam = searchParams.get("limit");
	const limitParamNum = limitParam ? Number(limitParam) : 10;

	if (
		limitParam === "0" ||
		!limitParamNum ||
		(limitParamNum !== 10 && limitParamNum !== 25)
	) {
		throw new Error("Invalid request");
	}

	return { page: pageParamNum, limit: limitParamNum };
}
