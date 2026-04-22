import FilmTagsForm from "@/components/list/FilmTagsForm";
import type { SortValue } from "@/types/ui.interface";

interface Props {
	limitParam: number;
	sortParam: SortValue;
	tagParams: string[];
}

export default function FilmTags({ limitParam, sortParam, tagParams }: Props) {
	return (
		<section>
			<h2>Filter by tags</h2>
			<FilmTagsForm
				limitParam={limitParam}
				sortParam={sortParam}
				tagParams={tagParams}
			/>
		</section>
	);
}
