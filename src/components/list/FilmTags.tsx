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
	return (
		<section>
			<h2>Filter by tags</h2>
			<FilmTagsForm
				filmsPending={filmsPending}
				limitParam={limitParam}
				sortParam={sortParam}
				tagParams={tagParams}
			/>
		</section>
	);
}
