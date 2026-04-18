import type { Entity } from "@/lib/paginatedSortOptions";
import { paginatedSortOptions } from "@/lib/paginatedSortOptions";

interface Props {
	entity: Entity;
}

export default function SortItems({ entity }: Props) {
	const sortOption = paginatedSortOptions.find(
		(sortOption) => sortOption.entity === entity,
	);

	return (
		<select>
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
	);
}
