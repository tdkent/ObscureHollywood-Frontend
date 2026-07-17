/**
 * Routes
 */

// Navigation
export interface NavLink {
	href: string;
	label: string;
	testId: string;
}

// Page routes
export type Entity =
	| "features"
	| "films"
	| "people"
	| "quiz"
	| "search"
	| "studios"
	| "tags";

/**
 * Data presentation
 */

// Description lists
interface DlDescription {
	label: number | string | null;
	href?: string;
}

//? Use after data has been filtered for null entries
export interface FilteredDlMetadata {
	title: string;
	description: DlDescription | DlDescription[];
}

export const dlText = {
	NA: "N/A",
	UNKNOWN: "Unknown",
};

/**
 * Forms
 */

// Sort select
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
