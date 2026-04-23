import { useSearchParams } from "react-router";
import type { PaginatedResponse } from "@/types/paginated-response.interface";

interface Props {
	currentPage: number;
	lastPage: number;
	links: PaginatedResponse["links"];
}

export default function PaginationLinks({
	currentPage,
	lastPage,
	links,
}: Props) {
	const [_, setSearchParams] = useSearchParams();

	function handleClick(params: string) {
		setSearchParams(`?${params}`);
	}

	return (
		<div>
			<button
				disabled={currentPage === 1}
				type="button"
				onClick={() => handleClick(links.first)}
			>
				1
			</button>
			<button
				disabled={currentPage === 1}
				type="button"
				onClick={() => handleClick(links.previous)}
			>
				Prev
			</button>
			<span>{currentPage}</span>
			<button
				disabled={currentPage >= lastPage}
				type="button"
				onClick={() => handleClick(links.next)}
			>
				Next
			</button>
			<button type="button" onClick={() => handleClick(links.last)}>
				{lastPage || 1}
			</button>
		</div>
	);
}
