import type { PaginatedResponse } from "@/types/paginated-response.interface";

interface Props {
	hasData: boolean;
	metadata: PaginatedResponse["meta"];
	tags: string[];
}

export default function PaginationMetadata({ hasData, metadata, tags }: Props) {
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
							return <li key={tag}>#{tag}</li>;
						})}
					</ul>
				</div>
			) : null}
		</div>
	);
}
