// import { X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
// import { Link, useLocation, useSearchParams } from "react-router";
import type { PaginatedResponse } from "@/types/paginated-response.interface";

interface Props {
	hasData: boolean;
	limitParam: number;
	metadata: PaginatedResponse["meta"];
	setFilters: Dispatch<SetStateAction<string[]>>;
	sortParam: string;
	// tags: string[];
}

export default function PaginationMetadata({
	hasData,
	// limitParam,
	metadata,
	// setFilters,
	// sortParam,
	// tags,
}: Props) {
	// const [_, setSearchParams] = useSearchParams();
	// const { pathname } = useLocation();

	// const showTags = pathname === "/films" && tags.length;

	/** Remove selected tag and reconstruct search url. */
	// function handleClick(selected: string) {
	// 	const removeSelected = tags.filter((tag) => tag !== selected).sort();
	// 	setFilters(removeSelected);

	// 	const params = `?page=1&limit=${limitParam}&orderBy=${sortParam}`;
	// 	const tagParams = removeSelected.length
	// 		? `&tag=${removeSelected.join("&tag=")}`
	// 		: "";

	// 	setSearchParams(`${params}${tagParams}`);
	// }
	return (
		<div className="flex flex-col gap-6">
			{hasData ? (
				<p>
					{metadata.firstItemOnPage} – {metadata.lastItemOnPage} of{" "}
					{metadata.totalItems} results
				</p>
			) : (
				<p>No results found.</p>
			)}

			{/* {showTags ? (
				<div className="flex gap-2">
					Tags:
					<ul className="flex flex-col gap-2">
						{tags.map((tag) => {
							return (
								<li className="flex gap-3 items-center" key={tag}>
									<Link
										to={`/tags/${tag}`}
										className="hover:underline underline-offset-4"
									>
										#{tag}
									</Link>
									<button
										onClick={() => handleClick(tag)}
										type="button"
										className="cursor-pointer"
									>
										<X className="stroke-4 size-4 stroke-gold-dark dark:stroke-gold" />
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			) : null} */}
		</div>
	);
}
