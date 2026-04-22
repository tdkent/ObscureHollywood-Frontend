import { useSearchParams } from "react-router";
import { paginatedSortOptions } from "@/lib/paginatedSortOptions";
import type { Entity, SortValue } from "@/types/ui.interface";

interface Props {
	entity: Entity;
	limit: number;
	sort: SortValue;
	tagsParamString: string;
}

export default function SortItems({
	entity,
	limit,
	sort,
	tagsParamString,
}: Props) {
	const [_, setSearchParams] = useSearchParams();

	const sortOption = paginatedSortOptions.find(
		(sortOption) => sortOption.entity === entity,
	);

	function handleSelect(
		e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
	) {
		const newSearchString = `?page=1&limit=${limit}&orderBy=${e.currentTarget.value}${tagsParamString}`;
		setSearchParams(newSearchString);
	}

	return (
		<select id="sort-items" onChange={handleSelect}>
			{sortOption
				? sortOption.options
						.sort((a, b) => a.id - b.id)
						.map((option) => {
							return (
								<option
									key={option.label}
									selected={sort === option.value}
									value={option.value}
								>
									{option.label}
								</option>
							);
						})
				: null}
		</select>
	);
}
