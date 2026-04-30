import { useQuery } from "@tanstack/react-query";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import httpRequest from "@/api/httpRequest";
import FilterForm from "@/components/list/FilterForm";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { Tag } from "@/types/tag.interface";
import type { SortValue } from "@/types/ui.interface";

interface Props {
	filmsPending: boolean;
	limitParam: number;
	sortParam: SortValue;
	tagParams: string[];
}

export default function Filter({
	filmsPending,
	limitParam,
	sortParam,
	tagParams,
}: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const { data, error, isPending } = useQuery({
		queryKey: ["tags"],
		queryFn: () => httpRequest("/tags"),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

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
			<div className="drawer-content">
				<button type="button" onClick={() => setIsOpen(true)}>
					Filter
					<Plus className="size-4" />
				</button>
			</div>

			{/* Shelf container */}
			<div className="drawer-side">
				{/* Bg overlay -- make interactive and accessible */}
				<div className="drawer-overlay" />

				{/* Shelf */}
				<div className="menu bg-base-200 min-h-full w-80 p-4">
					{/* Header */}
					<header className="flex items-center justify-between">
						<h3 className="font-semibold text-xl">Filter films by tag</h3>

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
						limitParam={limitParam}
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
