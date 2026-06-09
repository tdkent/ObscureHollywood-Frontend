import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import { DOMAIN_URL } from "@/constants/api.constants";
import type { UrlSearchParams } from "@/types/api.interface";

const description = "List of all people articles.";
const canonicalUrl = `${DOMAIN_URL}people`;

export const Route = createFileRoute("/people/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "People - Obscure Hollywood" },
			{ name: "description", content: description },
			// Open Graph
			{ property: "og:site_name", content: "Obscure Hollywood" },
			{ property: "og:type", content: "article" },
			{ property: "og:title", content: "People" },
			{
				property: "og:description",
				content: description,
			},
			{
				property: "og:url",
				content: canonicalUrl,
			},
			//? Temp disable robots
			{ name: "robots", content: "noindex,nofollow" },
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
	const { limit, orderBy, page }: UrlSearchParams = useSearch({
		from: "/people/",
	});

	return (
		<ListPage limit={limit} orderBy={orderBy} page={page} route="people" />
	);
}
