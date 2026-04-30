import { X } from "lucide-react";
import { useSearchParams } from "react-router";
import type { PaginatedResponse } from "@/types/paginated-response.interface";
import type { SortValue } from "@/types/ui.interface";

interface Props {
	hasData: boolean;
	limitParam: number;
	metadata: PaginatedResponse["meta"];
	sortParam: SortValue;
	tags: string[];
}

export default function PaginationMetadata({
	hasData,
	limitParam,
	metadata,
	sortParam,
	tags,
}: Props) {
	const [_, setSearchParams] = useSearchParams();

	/** Remove selected tag and reconstruct search url. */
	function handleClick(selected: string) {
		const removeSelected = tags.filter((tag) => tag !== selected).sort();

		const params = `?page=1&limit=${limitParam}&orderBy=${sortParam}`;
		const tagParams = removeSelected.length
			? `&tag=${removeSelected.join("&tag=")}`
			: "";

		setSearchParams(`${params}${tagParams}`);
	}
	return (
		<div className="flex flex-col gap-2 text-sm">
			{hasData ? (
				<div className="flex gap-4">
					<span>
						Page: {metadata.currentPage} of {metadata.totalPages}
					</span>
					<span>
						Results: {metadata.firstItemOnPage} – {metadata.lastItemOnPage} of{" "}
						{metadata.totalItems}
					</span>
				</div>
			) : (
				<p>No results to show</p>
			)}

			{tags.length ? (
				<div className="flex gap-2">
					Tags:
					<ul className="flex flex-col gap-1">
						{tags.map((tag) => {
							return (
								<li className="flex gap-1.5 items-center" key={tag}>
									#{tag}
									<button onClick={() => handleClick(tag)} type="button">
										<X className="stroke-3 size-3" />
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			) : null}
		</div>
	);
}
