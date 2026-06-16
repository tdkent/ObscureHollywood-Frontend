import { useLocation, useNavigate } from "@tanstack/react-router";
import { paginatedSortOptions } from "@/lib/paginatedSortOptions";
import type { Entity } from "@/types/ui.interface";

interface Props {
	queryUrl?: string;
	route: Entity;
	searchParam: string | undefined;
	sortParam: string;
	tagsParam: string[] | undefined;
}

export default function SortItems({
	route,
	searchParam,
	sortParam,
	tagsParam,
}: Props) {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const sortOption = paginatedSortOptions.find(
		(sortOption) => sortOption.entity === route,
	);

	const defaultValue = sortOption?.options.find(
		(opt) => opt.value === sortParam,
	)?.value;

	return (
		<div className="flex items-center justify-between grow md:justify-start">
			<label htmlFor="sort-items" className="md:w-30 lg:w-20">
				Sort by:
			</label>
			<select
				className="select w-3/5 sm:w-2/5 md:w-50 lg:w-40"
				defaultValue={defaultValue}
				id="sort-items"
				onChange={(e) => {
					navigate({
						to: pathname,
						search: {
							page: 1,
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
