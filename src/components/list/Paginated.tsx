import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Filter from "@/components/list/Filter";
import ListItem from "@/components/list/ListItem";
import PaginationLimit from "@/components/list/PaginationLimit";
import PaginationLinks from "@/components/list/PaginationLinks";
import PaginationMetadata from "@/components/list/PaginationMetadata";
import SortItems from "@/components/list/SortItems";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { PaginatedResponse } from "@/types/paginated-response.interface";
import type { Entity } from "@/types/ui.interface";
import { createHttpRequestUrl } from "@/util/createHttpRequestUrl";
import { createQueryKey } from "@/util/createQueryKey";
import httpRequest from "@/util/httpRequest";
import { parseSearchParams } from "@/util/parseSearchParams";

interface Props {
	limit: string | undefined;
	page: string | undefined;
	orderBy: string | undefined;
	queryUrl?: string;
	route: Entity;
	searchParam?: string;
	showFilterControls?: boolean;
	tagsParam?: string[];
}

export default function Paginated({
	limit,
	page,
	orderBy,
	queryUrl,
	searchParam,
	route,
	showFilterControls,
	tagsParam,
}: Props) {
	const { pageParam, limitParam, sortParam } = parseSearchParams({
		limit,
		orderBy,
		page,
		route,
	});

	const [filters, setFilters] = useState<string[]>(tagsParam ?? []);

	const reqUrl = createHttpRequestUrl({
		limitParam,
		pageParam,
		route: queryUrl ?? route,
		searchParam,
		sortParam,
		tagsParam,
	});

	const queryKey = createQueryKey({
		limitParam,
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
	const totalItems = paginatedData.meta.totalItems;

	return (
		<div className="mt-2 sm:mt-4">
			<div className="flex flex-col gap-6 py-4 px-6 text-sm sm:px-12 sm:py-8 sm:text-base">
				<PaginationMetadata
					hasData={!!hasResults}
					limitParam={limitParam}
					metadata={paginatedData.meta}
					setFilters={setFilters}
					showFilterControls={!!showFilterControls}
					sortParam={sortParam}
					tagsParam={tagsParam}
				/>
				{hasResults ? (
					<div className="flex flex-col gap-6 w-full lg:flex-row lg:gap-16">
						{totalItems >= 25 && (
							<PaginationLimit
								currLimit={limitParam}
								route={route}
								searchParam={searchParam}
								sortParam={sortParam}
								tagsParam={tagsParam}
							/>
						)}
						<SortItems
							limitParam={limitParam}
							queryUrl={queryUrl}
							route={route}
							searchParam={searchParam}
							sortParam={sortParam}
							tagsParam={tagsParam}
						/>
					</div>
				) : null}
				{showFilterControls && (
					<Filter
						filmsPending={isPending}
						filters={filters}
						limitParam={limitParam}
						setFilters={setFilters}
						sortParam={sortParam}
					/>
				)}
			</div>
			{hasResults ? (
				<>
					<ul className="my-8 flex flex-col sm:my-12">
						{paginatedData.data.map((item) => {
							return <ListItem key={item.id} entity={route} item={item} />;
						})}
					</ul>
					<PaginationLinks
						lastPage={paginatedData.meta.totalPages}
						limit={limitParam}
						orderBy={sortParam}
						page={pageParam}
						searchParam={searchParam}
						tagsParam={tagsParam}
					/>
				</>
			) : null}
		</div>
	);
}
