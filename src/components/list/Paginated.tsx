import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ClientOnly } from "@tanstack/react-router";
import { useState } from "react";
import DisplayListItems from "@/components/list/DisplayListItems";
import Filter from "@/components/list/Filter";
import PaginationLinks from "@/components/list/PaginationLinks";
import PaginationMetadata from "@/components/list/PaginationMetadata";
import SortItems from "@/components/list/SortItems";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import { PAGINATION_TAKE_COUNT } from "@/constants/api.constants";
import type { PaginatedResponse } from "@/types/paginated-response.interface";
import type { Entity } from "@/types/ui.interface";
import { createHttpRequestUrl } from "@/util/createHttpRequestUrl";
import { createQueryKey } from "@/util/createQueryKey";
import httpRequest from "@/util/httpRequest";
import { parseSearchParams } from "@/util/parseSearchParams";

interface Props {
	page: string | undefined;
	orderBy: string | undefined;
	queryUrl?: string;
	route: Entity;
	searchParam?: string;
	showFilterControls?: boolean;
	tagsParam?: string[];
}

export default function Paginated({
	page,
	orderBy,
	queryUrl,
	searchParam,
	route,
	showFilterControls,
	tagsParam,
}: Props) {
	const { pageParam, sortParam } = parseSearchParams({
		orderBy,
		page,
		route,
	});

	const [filters, setFilters] = useState<string[]>(tagsParam ?? []);

	const reqUrl = createHttpRequestUrl({
		pageParam,
		route: queryUrl ?? route,
		searchParam,
		sortParam,
		tagsParam,
	});

	const queryKey = createQueryKey({
		pageParam,
		route: queryUrl ?? route,
		searchParam,
		sortParam,
		tagsParam,
	});

	const { data, error, isPending } = useQuery({
		queryKey,
		queryFn: () => httpRequest(reqUrl),
		placeholderData: keepPreviousData,
	});

	if (isPending) return <Loading variant="list" />;
	if (error) return <DisplayError />;

	const paginatedData = data as PaginatedResponse;
	const hasResults = paginatedData.data.length;

	// Do not show links if there is only 1 page
	const showPaginationLinks =
		paginatedData.meta.totalItems > PAGINATION_TAKE_COUNT;

	return (
		<div className="mt-2 sm:mt-4">
			<div className="flex flex-col gap-6 py-4 px-6 text-sm sm:px-12 sm:py-8 sm:text-base">
				{hasResults ? (
					<>
						<div className="flex flex-col gap-6 w-full lg:flex-row lg:gap-16">
							<SortItems
								queryUrl={queryUrl}
								route={route}
								searchParam={searchParam}
								sortParam={sortParam}
								tagsParam={tagsParam}
							/>
						</div>
						{showFilterControls && (
							<Filter
								filmsPending={isPending}
								filters={filters}
								setFilters={setFilters}
								sortParam={sortParam}
							/>
						)}
					</>
				) : (
					<p>No results found.</p>
				)}
			</div>
			{hasResults ? (
				<div className="flex flex-col gap-4 my-6">
					<ClientOnly>
						<DisplayListItems paginatedData={paginatedData} route={route} />
					</ClientOnly>
					<div className="flex flex-col items-center gap-4 mt-4 sm:mt-0">
						<PaginationMetadata
							metadata={paginatedData.meta}
							setFilters={setFilters}
							showFilterControls={!!showFilterControls}
							sortParam={sortParam}
							tagsParam={tagsParam}
						/>
						{showPaginationLinks && (
							<PaginationLinks
								orderBy={sortParam}
								page={pageParam}
								searchParam={searchParam}
								tagsParam={tagsParam}
								totalPages={paginatedData.meta.totalPages}
							/>
						)}
					</div>
				</div>
			) : null}
		</div>
	);
}
