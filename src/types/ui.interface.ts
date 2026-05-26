/**
 * Navigation
 */
export interface NavLink {
	href: string;
	label: string;
	testId: string;
}

/**
 * Data Entities
 */

export type Entity =
	| "features"
	| "films"
	| "people"
	| "quiz"
	| "search"
	| "studios"
	| "tags";

interface DlDescription {
	label: number | string | null;
	href?: string;
}

//Use if some/all db entries may be null
export interface UnfilteredDlMetadata {
	title: string | null;
	description: DlDescription | DlDescription[] | null;
}

// Use after data has been filtered for null entries
export interface FilteredDlMetadata {
	title: string;
	description: DlDescription | DlDescription[];
}

/**
 * Sort
 */
export interface SelectOption {
	id: number;
	label: string;
	value: string;
}

export interface SortOption {
	entity: Entity;
	options: SelectOption[];
}

// Quiz form
export interface FormInputs {
	[key: string]: string;
}

// Http request options
export interface OptionsInput {
	method: "POST";
	body: object;
}
