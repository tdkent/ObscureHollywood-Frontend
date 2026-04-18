import type { PaginatedResponse } from "@/types/paginated-response.interface";

interface Props {
	hasData: boolean;
	metadata: PaginatedResponse["meta"];
}

export default function PaginationMetadata({ hasData, metadata }: Props) {
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
		</div>
	);
}
