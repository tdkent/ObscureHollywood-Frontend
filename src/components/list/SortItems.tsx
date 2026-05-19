import { useSearchParams } from "react-router";
import { paginatedSortOptions } from "@/lib/paginatedSortOptions";
import type { Entity, SortValue } from "@/types/ui.interface";

interface Props {
	entity: Entity;
	limit: number;
	searchParam: string | null;
	sort: SortValue;
	tagsParamString: string;
}

export default function SortItems({
	entity,
	limit,
	searchParam,
	sort,
	tagsParamString,
}: Props) {
	const [_, setSearchParams] = useSearchParams();

	const sortOption = paginatedSortOptions.find(
		(sortOption) => sortOption.entity === entity,
	);

	let params = "";
	if (searchParam) params += `&q=${searchParam}`;
	if (tagsParamString) params += tagsParamString;

	function handleSelect(
		e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
	) {
		const newSearchString = `?page=1&limit=${limit}&orderBy=${e.currentTarget.value}${params}`;
		setSearchParams(newSearchString);
	}

	const defaultValue = sortOption?.options.find(
		(opt) => opt.value === sort,
	)?.value;

	return (
		<div className="flex items-center justify-between md:justify-start">
			<span className="md:w-30 lg:w-24">Sort by:</span>
			<select
				className="select w-3/5 sm:w-2/5 md:w-50"
				defaultValue={defaultValue}
				id="sort-items"
				onChange={handleSelect}
			>
				{sortOption
					? sortOption.options
							.sort((a, b) => a.id - b.id)
							.map((option) => {
								return (
									<option key={option.label} value={option.value}>
										{option.label}
									</option>
								);
							})
					: null}
			</select>
		</div>
	);
}
