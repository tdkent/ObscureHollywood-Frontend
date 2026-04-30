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
		<div className="flex place-items-center text-sm gap-2">
			Show:
			<div className="flex gap-3">
				{limitOptions.map((option) => {
					const selected = option === currLimit;
					return (
						<button
							className={`border rounded size-8 bg-bg-accent ${selected ? "text-text-disabled" : "text-text"} transition-colors`}
							key={option}
							type="button"
							disabled={selected}
							onClick={() =>
								setSearchParams(`?page=1&limit=${option}${params}`)
							}
						>
							{option}
						</button>
					);
				})}
			</div>
		</div>
	);
}
