import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import { DOMAIN_URL } from "@/constants/api.constants";
import type { UrlSearchParams } from "@/types/api.interface";

const description = "Search results";
const canonicalUrl = `${DOMAIN_URL}search`;

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
				content: canonicalUrl,
			},
		],
		links: [
			{
				rel: "canonical",
				href: canonicalUrl,
			},
		],
	}),
});

function RouteComponent() {
	const { orderBy, page, q }: UrlSearchParams = useSearch({
		from: "/search",
	});

	return (
		<ListPage orderBy={orderBy} page={page} searchParam={q} route="search" />
	);
}
