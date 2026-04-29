import { Plus } from "lucide-react";
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
	const modalName = "filterModal";
	const modal = document.getElementById(modalName) as HTMLDialogElement;

	return (
		<div>
			<button className="btn" onClick={() => modal.showModal()} type="button">
				Filter
				<Plus className="size-4" />
			</button>

			<dialog id={modalName} className="modal">
				<div className="modal-box">
					<h3 className="font-semibold text-xl">Filter films by tag</h3>
					<div className="modal-action justify-start">
						<FilmTagsForm
							filmsPending={filmsPending}
							limitParam={limitParam}
							sortParam={sortParam}
							tagParams={tagParams}
						/>
					</div>
				</div>
			</dialog>
		</div>
	);
}
