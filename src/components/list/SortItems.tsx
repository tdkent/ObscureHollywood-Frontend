import { useNavigate } from "@tanstack/react-router";
import { paginatedSortOptions } from "@/lib/paginatedSortOptions";
import type { Entity } from "@/types/ui.interface";

interface Props {
	limitParam: number;
	route: Entity;
	searchParam: string | undefined;
	sortParam: string;
	tagsParam: string[] | undefined;
}

export default function SortItems({
	limitParam,
	route,
	searchParam,
	sortParam,
	tagsParam,
}: Props) {
	const navigate = useNavigate({ from: `/${route}` });

	const sortOption = paginatedSortOptions.find(
		(sortOption) => sortOption.entity === route,
	);

	const defaultValue = sortOption?.options.find(
		(opt) => opt.value === sortParam,
	)?.value;

	return (
		<div className="flex items-center justify-between md:justify-start">
			<span className="md:w-30 lg:w-24">Sort by:</span>
			<select
				className="select w-3/5 sm:w-2/5 md:w-50"
				defaultValue={defaultValue}
				id="sort-items"
				onChange={(e) => {
					navigate({
						to: `/${route}`,
						search: {
							page: 1,
							limit: limitParam,
							orderBy: e.currentTarget.value,
							q: searchParam,
							tag: tagsParam,
						},
					});
				}}
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
