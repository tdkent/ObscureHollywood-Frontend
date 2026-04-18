import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";
import PaginationLinks from "@/components/list/PaginationLinks";
import PaginationMetadata from "@/components/list/PaginationMetadata";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { PaginatedResponse } from "@/types/paginated-response.interface";

interface Inputs {
	route: string;
}

export default function PaginatedList({ route }: Inputs) {
	const { data, error, isPending } = useQuery({
		queryKey: [route],
		queryFn: () => httpRequest(route),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	const paginatedData = data as PaginatedResponse;

	return (
		<div>
			<PaginationMetadata metadata={paginatedData.meta} />
			<PaginationLinks />
		</div>
	);
}
