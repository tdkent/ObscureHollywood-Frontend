import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
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
	return (
		<nav aria-label="Pagination" className="flex justify-center mt-12">
			<ul className="join">
				<li className="join-item btn">
					<Link aria-label="Page 1" to={`?${links.first}`}>
						1
					</Link>
				</li>
				<li className="join-item btn">
					<Link aria-label="Previous page" to={`?${links.previous}`}>
						<ChevronLeft className="size-4" />
					</Link>
				</li>
				<li className="join-item btn btn-active">
					<span>{currentPage}</span>
				</li>
				<li className="join-item btn">
					<Link aria-label="Next page" to={`?${links.next}`}>
						<ChevronRight className="size-4" />
					</Link>
				</li>
				<li className="join-item btn">
					<Link aria-label={`Page ${lastPage || 1}`} to={`?${links.last}`}>
						{lastPage || 1}
					</Link>
				</li>
			</ul>
		</nav>
	);
}
