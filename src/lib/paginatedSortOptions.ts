type SortValue =
	| "firstNameAsc"
	| "firstNameDesc"
	| "lastNameAsc"
	| "lastNameDesc"
	| "nameAsc"
	| "nameDesc"
	| "yearAsc"
	| "yearDesc";

export type Entity = "features" | "films" | "people" | "studios" | "tags";

interface SelectOption {
	label: string;
	value: SortValue;
}

interface SortOption {
	entity: Entity;
	options: SelectOption[];
}

const firstNameAsc: SelectOption = {
	label: "First Name (A-Z)",
	value: "firstNameAsc",
};

const firstNameDesc: SelectOption = {
	label: "First Name (Z-A)",
	value: "firstNameDesc",
};

const lastNameAsc: SelectOption = {
	label: "Last Name (A-Z)",
	value: "lastNameAsc",
};

const lastNameDesc: SelectOption = {
	label: "Last Name (Z-A)",
	value: "lastNameDesc",
};

const nameAsc: SelectOption = {
	label: "Name (A-Z)",
	value: "nameAsc",
};

const nameDesc: SelectOption = {
	label: "Name (Z-A)",
	value: "nameDesc",
};

const yearAsc: SelectOption = {
	label: "Year (Oldest-Newest)",
	value: "yearAsc",
};

const yearDesc: SelectOption = {
	label: "Year (Newest-Oldest)",
	value: "yearDesc",
};

export const paginatedSortOptions: SortOption[] = [
	{
		entity: "features",
		options: [nameAsc, nameDesc],
	},
	{
		entity: "films",
		options: [nameAsc, nameDesc, yearAsc, yearDesc],
	},
	{
		entity: "people",
		options: [firstNameAsc, firstNameDesc, lastNameAsc, lastNameDesc],
	},
	{
		entity: "studios",
		options: [nameAsc, nameDesc],
	},
];
