import type { PaginatedResponse } from "@/types/paginated-response.interface";

interface Props {
	hasData: boolean;
	metadata: PaginatedResponse["meta"];
	tags: string[];
}

export default function PaginationMetadata({ hasData, metadata, tags }: Props) {
	return (
		<div className="text-sm">
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
				<p>Tags: {tags.map((tag) => `#${tag}`).join("")}</p>
			) : null}
		</div>
	);
}
