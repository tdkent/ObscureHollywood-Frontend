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
	| "articles"
	| "features"
	| "films"
	| "people"
	| "studios"
	| "tags";

/**
 * Sort
 */
export type SortValue =
	| "firstNameAsc"
	| "firstNameDesc"
	| "lastNameAsc"
	| "lastNameDesc"
	| "nameAsc"
	| "nameDesc"
	| "yearAsc"
	| "yearDesc";

export interface SelectOption {
	id: number;
	label: string;
	value: SortValue;
}

export interface SortOption {
	entity: Entity;
	options: SelectOption[];
}
