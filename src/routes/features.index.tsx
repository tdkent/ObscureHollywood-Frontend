import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import { DOMAIN_URL } from "@/constants/api.constants";
import type { UrlSearchParams } from "@/types/api.interface";

const description = "List of all feature articles.";
const canonicalUrl = `${DOMAIN_URL}features`;

export const Route = createFileRoute("/features/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Features - Obscure Hollywood" },
			{ name: "description", content: description },
			// Open Graph
			{ property: "og:site_name", content: "Obscure Hollywood" },
			{ property: "og:type", content: "article" },
			{ property: "og:title", content: "Features" },
			{
				property: "og:description",
				content: description,
			},
			{ property: "og:url", content: canonicalUrl },
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
	const { orderBy, page }: UrlSearchParams = useSearch({
		from: "/features/",
	});

	return <ListPage orderBy={orderBy} page={page} route="features" />;
}
