import type { PaginatedResponse } from "@/types/paginated-response.interface";

interface Props {
	hasData: boolean;
	metadata: PaginatedResponse["meta"];
	tags: string[];
}

export default function PaginationMetadata({ hasData, metadata, tags }: Props) {
	return (
		<div>
			{hasData ? (
				<>
					<p>
						Page {metadata.currentPage} of {metadata.totalPages}
					</p>
					<p>
						Showing {metadata.firstItemOnPage} – {metadata.lastItemOnPage} of{" "}
						{metadata.totalItems} results
					</p>
				</>
			) : (
				<p>No results to show</p>
			)}

			{tags.length ? (
				<p>Tags: {tags.map((tag) => `#${tag}`).join("")}</p>
			) : null}
		</div>
	);
}
