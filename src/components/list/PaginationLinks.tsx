import { Link, useLocation } from "@tanstack/react-router";

interface Props {
	limit: number;
	orderBy: string;
	page: number;
	searchParam?: string;
	tagsParam?: string[];
	totalPages: number;
}

export default function PaginationLinks({
	limit,
	orderBy,
	page,
	searchParam,
	tagsParam,
	totalPages,
}: Props) {
	const { pathname } = useLocation();

	const isFirstPage = page <= 1;
	const isLastPage = !totalPages || page >= totalPages;

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
							to={pathname}
							search={{
								page: page <= 1 ? 1 : page - 1,
								limit,
								orderBy,
								search: searchParam,
								tag: tagsParam,
							}}
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
							to={pathname}
							search={{
								page: 1,
								limit,
								orderBy,
								search: searchParam,
								tag: tagsParam,
							}}
						>
							1
						</Link>
					)}
				</li>
				<li className="join-item btn btn-active cursor-default sm:text-lg sm:px-6">
					<span aria-current>{isFirstPage ? 1 : page}</span>
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
							to={pathname}
							search={{
								page: isFirstPage ? 2 : page + 1,
								limit,
								orderBy,
								search: searchParam,
								tag: tagsParam,
							}}
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
							aria-label={`Page ${totalPages || 1}`}
							className="w-full h-full px-4 flex items-center sm:text-lg sm:px-6"
							to={pathname}
							search={{
								page: totalPages,
								limit,
								orderBy,
								search: searchParam,
								tag: tagsParam,
							}}
						>
							Last
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}
