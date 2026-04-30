import { Plus } from "lucide-react";
import { useState } from "react";
import FilmTagsForm from "@/components/list/FilmTagsForm";
import type { SortValue } from "@/types/ui.interface";

interface Props {
	filmsPending: boolean;
	limitParam: number;
	sortParam: SortValue;
	tagParams: string[];
}

export default function FilmTags({
	filmsPending,
	limitParam,
	sortParam,
	tagParams,
}: Props) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="drawer">
			{/* Hidden checkbox control shelf */}
			<input type="checkbox" checked={isOpen} className="drawer-toggle" />

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
					<h3 className="font-semibold text-xl">Filter films by tag</h3>
					<FilmTagsForm
						filmsPending={filmsPending}
						limitParam={limitParam}
						setIsOpen={setIsOpen}
						sortParam={sortParam}
						tagParams={tagParams}
					/>
				</div>
			</div>
		</div>
	);
}
