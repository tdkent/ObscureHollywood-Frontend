import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import type { UrlSearchParams } from "@/types/api.interface";

export const Route = createFileRoute("/search")({
	component: RouteComponent,
	head: () => ({
		meta: [{ title: "Search - Obscure Hollywood" }],
	}),
});

function RouteComponent() {
	const { limit, orderBy, page, q }: UrlSearchParams = useSearch({
		from: "/search",
	});

	return (
		<ListPage
			limit={limit}
			orderBy={orderBy}
			page={page}
			searchParam={q}
			route="search"
		/>
	);
}
