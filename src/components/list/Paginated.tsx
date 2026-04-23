import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Link, useLocation, useSearchParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import FilmTags from "@/components/list/FilmTags";
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

export default function Paginated() {
	const { pathname, search } = useLocation();
	const [searchParams] = useSearchParams();

	const entity = pathname.slice(1) as Entity;

	const { limit, page, sort, tags, tagsParamString } = getSearchParams({
		entity,
		searchParams,
		search,
	});

	const { data, error, isPending } = useQuery({
		// Use route and search params as query key
		queryKey: [pathname, page, limit, sort, ...tags],
		queryFn: () => httpRequest(`${pathname}${search}`),
		placeholderData: keepPreviousData,
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	const paginatedData = data as PaginatedResponse;

	return (
		<div>
			{entity === "films" && (
				<FilmTags
					filmsPending={isPending}
					limitParam={limit}
					sortParam={sort}
					tagParams={tags}
				/>
			)}
			<PaginationLimit
				currLimit={limit}
				sortParam={sort}
				tagsParamString={tagsParamString}
			/>
			<PaginationMetadata
				hasData={!!paginatedData.data.length}
				metadata={paginatedData.meta}
				tags={tags}
			/>
			<SortItems
				entity={entity}
				limit={limit}
				sort={sort}
				tagsParamString={tagsParamString}
			/>
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
