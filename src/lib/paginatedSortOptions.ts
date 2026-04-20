import type { SelectOption, SortOption } from "@/types/ui.interface";

const firstNameAsc: SelectOption = {
	id: 1,
	label: "First Name (A-Z)",
	value: "firstNameAsc",
};

const firstNameDesc: SelectOption = {
	id: 2,
	label: "First Name (Z-A)",
	value: "firstNameDesc",
};

const lastNameAsc: SelectOption = {
	id: 3,
	label: "Last Name (A-Z)",
	value: "lastNameAsc",
};

const lastNameDesc: SelectOption = {
	id: 4,
	label: "Last Name (Z-A)",
	value: "lastNameDesc",
};

const nameAsc: SelectOption = {
	id: 5,
	label: "Name (A-Z)",
	value: "nameAsc",
};

const nameDesc: SelectOption = {
	id: 6,
	label: "Name (Z-A)",
	value: "nameDesc",
};

const yearAsc: SelectOption = {
	id: 7,
	label: "Year (Oldest-Newest)",
	value: "yearAsc",
};

const yearDesc: SelectOption = {
	id: 8,
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
