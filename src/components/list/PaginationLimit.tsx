import { useSearchParams } from "react-router";
import type { SortValue } from "@/lib/paginatedSortOptions";

interface Props {
	currLimit: number;
	sort: SortValue;
}

export default function PaginationLimit({ currLimit, sort }: Props) {
	const [_, setSearchParams] = useSearchParams();

	const limitOptions = [10, 25];

	return (
		<div>
			Items to show:
			{limitOptions.map((option) => {
				return (
					<button
						key={option}
						type="button"
						disabled={option === currLimit}
						onClick={() =>
							setSearchParams(`?page=1&limit=${option}&orderBy=${sort}`)
						}
					>
						{option}
					</button>
				);
			})}
		</div>
	);
}
