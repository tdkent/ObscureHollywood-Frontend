import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useLocation, useSearchParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import Filter from "@/components/list/Filter";
import ListItem from "@/components/list/ListItem";
import PaginationLimit from "@/components/list/PaginationLimit";
import PaginationLinks from "@/components/list/PaginationLinks";
import PaginationMetadata from "@/components/list/PaginationMetadata";
import SortItems from "@/components/list/SortItems";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import { getSearchParams } from "@/lib/utils/getSearchParams";
import type { PaginatedResponse } from "@/types/paginated-response.interface";
import type { Entity } from "@/types/ui.interface";

interface Props {
	showFilterControls?: boolean;
	reqUrl?: string;
	routeEntity?: Entity;
}

export default function Paginated({
	reqUrl,
	routeEntity,
	showFilterControls,
}: Props) {
	const { pathname, search } = useLocation();
	const [searchParams] = useSearchParams();

	// Use entity if provided in props
	const entity = routeEntity ?? (pathname.slice(1) as Entity);

	const { limit, page, searchParam, sort, tags, tagsParamString } =
		getSearchParams({
			entity,
			searchParams,
			search,
		});

	const [filters, setFilters] = useState<string[]>(tags);

	// Convert /search to /articles
	const requestPath = pathname === "/search" ? "/articles" : pathname;

	// Use request url from props if provided
	const requestUrl = `${reqUrl ?? requestPath}${search}`;

	const { data, error, isPending } = useQuery({
		// Use route and search params as query key
		queryKey: [pathname, page, limit, sort, searchParam, ...tags],
		queryFn: () => httpRequest(requestUrl),
		placeholderData: keepPreviousData,
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	const paginatedData = data as PaginatedResponse;
	const hasResults = paginatedData.data.length;

	return (
		<div className="my-6">
			<div className="flex flex-col gap-6 border-y py-4 px-6 text-sm">
				<PaginationMetadata
					hasData={!!hasResults}
					limitParam={limit}
					metadata={paginatedData.meta}
					setFilters={setFilters}
					sortParam={sort}
					tags={tags}
				/>
				{hasResults ? (
					<div className="flex flex-col gap-6">
						<PaginationLimit
							currLimit={limit}
							searchParam={searchParam}
							sortParam={sort}
							tagsParamString={tagsParamString}
						/>
						<SortItems
							entity={entity}
							limit={limit}
							searchParam={searchParam}
							sort={sort}
							tagsParamString={tagsParamString}
						/>
					</div>
				) : null}
				{showFilterControls && (
					<Filter
						filmsPending={isPending}
						filters={filters}
						limitParam={limit}
						setFilters={setFilters}
						sortParam={sort}
						tagParams={tags}
					/>
				)}
			</div>
			{hasResults ? (
				<>
					<ul className="my-8 flex flex-col text-sm">
						{paginatedData.data.map((item) => {
							return <ListItem key={item.id} entity={entity} item={item} />;
						})}
					</ul>
					<PaginationLinks
						currentPage={page}
						lastPage={paginatedData.meta.totalPages}
						links={paginatedData.links}
					/>
				</>
			) : null}
		</div>
	);
}
