import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Link, useLocation, useSearchParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import ListItem from "@/components/list/ListItem";
import PaginationLimit from "@/components/list/PaginationLimit";
import PaginationLinks from "@/components/list/PaginationLinks";
import PaginationMetadata from "@/components/list/PaginationMetadata";
import SortItems from "@/components/list/SortItems";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { Entity } from "@/lib/paginatedSortOptions";
import { getSearchParams } from "@/lib/utils/getSearchParams";
import type { PaginatedResponse } from "@/types/paginated-response.interface";

export default function Paginated() {
	const { pathname, search } = useLocation();
	const [searchParams] = useSearchParams();

	const entity = pathname.slice(1) as Entity;

	const { limit, page, sort } = getSearchParams(searchParams, entity);

	const { data, error, isPending } = useQuery({
		// Use route and search params as query key
		queryKey: [pathname, page, limit, sort],
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
			<SortItems entity={entity} limit={limit} sort={sort} />
			<PaginationLimit currLimit={limit} sort={sort} />
			<ul>
				{paginatedData.data.map((item) => {
					return (
						<li key={item.id}>
							<Link to={item.slug}>
								<ListItem item={item} entity={entity} />
							</Link>
						</li>
					);
				})}
			</ul>
			<PaginationLinks
				currentPage={page}
				lastPage={paginatedData.meta.totalPages}
				links={paginatedData.links}
			/>
		</div>
	);
}
