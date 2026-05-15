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
	const isFirstPage = currentPage === 1;
	const isLastPage = !lastPage || currentPage === lastPage;
	return (
		<nav aria-label="Pagination" className="flex justify-center mt-12">
			<ul className="join">
				<li className={`join-item btn p-0 ${isFirstPage && "btn-disabled"}`}>
					{isFirstPage ? (
						<span aria-disabled className="px-4 sm:text-lg sm:px-6">
							Back
						</span>
					) : (
						<Link
							aria-label="Previous page"
							className="w-full h-full px-4 flex items-center sm:text-lg sm:px-6"
							to={`?${links.previous}`}
						>
							Back
						</Link>
					)}
				</li>
				<li className={`join-item btn p-0 ${isFirstPage && "btn-disabled"}`}>
					{isFirstPage ? (
						<span aria-disabled className="px-4 sm:text-lg sm:px-6">
							1
						</span>
					) : (
						<Link
							aria-label="Page 1"
							className="w-full h-full px-4 flex items-center sm:text-lg sm:px-6"
							to={`?${links.first}`}
						>
							1
						</Link>
					)}
				</li>
				<li className="join-item btn btn-active cursor-default sm:text-lg sm:px-6">
					<span aria-current>{currentPage}</span>
				</li>
				<li className={`join-item btn p-0 ${isLastPage && "btn-disabled"}`}>
					{isLastPage ? (
						<span aria-disabled className="px-4 sm:text-lg sm:px-6">
							Next
						</span>
					) : (
						<Link
							aria-label="Next page"
							className="w-full h-full px-4 flex items-center sm:text-lg sm:px-6"
							to={`?${links.next}`}
						>
							Next
						</Link>
					)}
				</li>
				<li className={`join-item btn p-0 ${isLastPage && "btn-disabled"}`}>
					{isLastPage ? (
						<span aria-disabled className="px-4 sm:text-lg sm:px-6">
							Last
						</span>
					) : (
						<Link
							aria-label={`Page ${lastPage || 1}`}
							className="w-full h-full px-4 flex items-center sm:text-lg sm:px-6"
							to={`?${links.last}`}
						>
							Last
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}
