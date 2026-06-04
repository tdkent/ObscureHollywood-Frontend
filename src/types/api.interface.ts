/**
 * URL Search Params
 */

// Params define paginated list state
//? All params may be undefined when grabbed from URL
export interface UrlSearchParams {
	limit?: string;
	orderBy?: string;
	page?: string;
	q?: string;
	tag?: string[];
}

/**
 * HTTP Request
 */

// Mutation options
export interface OptionsInput {
	method: "POST";
	body: object;
}
