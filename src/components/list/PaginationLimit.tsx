import { useSearchParams } from "react-router";
import type { SortValue } from "@/types/ui.interface";

interface Props {
	currLimit: number;
	sortParam: SortValue;
	tagsParamString: string;
}

export default function PaginationLimit({
	currLimit,
	sortParam,
	tagsParamString,
}: Props) {
	const [_, setSearchParams] = useSearchParams();

	const limitOptions = [10, 25];

	return (
		<div>
			Items to show:
			{limitOptions.map((option) => {
				const sortAndTagsParams = `&orderBy=${sortParam}${tagsParamString}`;
				return (
					<button
						key={option}
						type="button"
						disabled={option === currLimit}
						onClick={() =>
							setSearchParams(`?page=1&limit=${option}${sortAndTagsParams}`)
						}
					>
						{option}
					</button>
				);
			})}
		</div>
	);
}
