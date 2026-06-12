import type { PaginatedResponse } from "@/types/paginated-response.interface";

interface Props {
	metadata: PaginatedResponse["meta"];
	showFilterControls: boolean;
}

export default function PaginationMetadata({ metadata }: Props) {
	return (
		<div className="flex flex-col gap-6 text-base sm:text-lg">
			<p>
				Showing items {metadata.firstItemOnPage} – {metadata.lastItemOnPage} of{" "}
				{metadata.totalItems}
			</p>
		</div>
	);
}
