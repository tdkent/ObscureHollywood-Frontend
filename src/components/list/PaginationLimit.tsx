import { useSearchParams } from "react-router";
import type { SortValue } from "@/types/ui.interface";

interface Props {
	currLimit: number;
	searchParam: string | null;
	sortParam: SortValue;
	tagsParamString: string;
}

export default function PaginationLimit({
	currLimit,
	searchParam,
	sortParam,
	tagsParamString,
}: Props) {
	const [_, setSearchParams] = useSearchParams();

	const limitOptions = [10, 25];

	let params = `&orderBy=${sortParam}`;
	if (searchParam) params += `&searchString=${searchParam}`;
	if (tagsParamString) params += tagsParamString;

	return (
		<div>
			Items to show:
			{limitOptions.map((option) => {
				return (
					<button
						key={option}
						type="button"
						disabled={option === currLimit}
						onClick={() => setSearchParams(`?page=1&limit=${option}${params}`)}
					>
						{option}
					</button>
				);
			})}
		</div>
	);
}
