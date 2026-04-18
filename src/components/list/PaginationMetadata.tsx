import type { PaginatedResponse } from "@/types/paginated-response.interface";

interface Props {
	metadata: PaginatedResponse["meta"];
}

export default function PaginationMetadata({ metadata }: Props) {
	return (
		<section>
			<p>
				Page {metadata.currentPage} of {metadata.totalPages}
			</p>
		</section>
	);
}
