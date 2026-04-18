import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useLocation, useSearchParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import PaginationLinks from "@/components/list/PaginationLinks";
import PaginationMetadata from "@/components/list/PaginationMetadata";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import { getSearchParams } from "@/lib/utils/getSearchParams";
import type { PaginatedResponse } from "@/types/paginated-response.interface";

export default function PaginatedList() {
	const { pathname, search } = useLocation();
	const [searchParams] = useSearchParams();

	const { limit, page } = getSearchParams(searchParams);

	const { data, error, isPending } = useQuery({
		queryKey: [pathname, page, limit],
		queryFn: () => httpRequest(`${pathname}${search}`),
		placeholderData: keepPreviousData,
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	const paginatedData = data as PaginatedResponse;

	return (
		<div>
			<PaginationMetadata
				hasData={!!paginatedData.data.length}
				metadata={paginatedData.meta}
			/>
			<PaginationLinks
				currentPage={page}
				lastPage={paginatedData.meta.totalPages}
				links={paginatedData.links}
			/>
		</div>
	);
}
