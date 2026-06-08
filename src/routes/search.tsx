import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import type { UrlSearchParams } from "@/types/api.interface";

const description = "Search results";

export const Route = createFileRoute("/search")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Search - Obscure Hollywood" },
			{ name: "description", content: description },
			// Open Graph
			{ property: "og:site_name", content: "Obscure Hollywood" },
			{ property: "og:type", content: "article" },
			{ property: "og:title", content: "Search" },
			{
				property: "og:description",
				content: description,
			},
			{
				property: "og:url",
				content: "https://obscurehollywood.net/search",
			},
		],
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
