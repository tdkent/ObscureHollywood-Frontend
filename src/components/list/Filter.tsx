import { useQuery } from "@tanstack/react-query";
import { Plus, X } from "lucide-react";
import { type Dispatch, type SetStateAction, useState } from "react";
import FilterForm from "@/components/list/FilterForm";
import Loading from "@/components/shared/Loading";
import type { Tag } from "@/types/tag.interface";
import httpRequest from "@/util/httpRequest";

interface Props {
	filmsPending: boolean;
	filters: string[];
	limitParam: number;
	setFilters: Dispatch<SetStateAction<string[]>>;
	sortParam: string;
	tagParams: string[];
}

export default function Filter({
	filmsPending,
	filters,
	limitParam,
	setFilters,
	sortParam,
	tagParams,
}: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const { data, error, isPending } = useQuery({
		queryKey: ["tags"],
		queryFn: () => httpRequest("/tags"),
	});

	if (isPending) return <Loading variant="filter" />;
	if (error)
		return <span className="text-error text-sm">Error loading filters</span>;

	const tags = data as Tag[];

	return (
		<div className="drawer">
			{/* Hidden checkbox control shelf */}
			<input
				type="checkbox"
				checked={isOpen}
				className="drawer-toggle"
				// Suppress 'checked input without onChange' warning
				onChange={() => {}}
			/>

			{/* Button opens shelf */}
			<div className="drawer-content flex items-center justify-between md:justify-start">
				<span className="md:w-30 lg:w-24">Filter by:</span>
				<button
					className="btn btn-soft w-3/5 sm:w-2/5 md:w-50"
					type="button"
					onClick={() => setIsOpen(true)}
				>
					Add Filters
					<Plus className="size-4" />
				</button>
			</div>

			{/* Shelf container */}
			<div className="drawer-side">
				{/* Bg overlay */}
				<button
					aria-label="Close filters without applying"
					className="drawer-overlay"
					onClick={() => setIsOpen(false)}
					type="button"
				/>

				{/* Shelf */}
				<div className="menu bg-base-200 min-h-full w-80 p-4 sm:w-100 sm:px-12 sm:py-8">
					{/* Header */}
					<header className="flex items-center justify-between">
						<h3 className="font-semibold text-xl text-secondary-text">
							Filter films by tag
						</h3>

						{/* Close shelf without applying tags */}
						<button
							aria-label="Close filters without applying"
							className="btn btn-sm btn-circle btn-ghost"
							onClick={() => setIsOpen(false)}
							type="button"
						>
							<X className="size-8 stroke-2" />
						</button>
					</header>
					<FilterForm
						filmsPending={filmsPending}
						filters={filters}
						limitParam={limitParam}
						setFilters={setFilters}
						setIsOpen={setIsOpen}
						sortParam={sortParam}
						tagParams={tagParams}
						tags={tags}
					/>
				</div>
			</div>
		</div>
	);
}
