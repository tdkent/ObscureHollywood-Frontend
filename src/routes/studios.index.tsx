import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import type { UrlSearchParams } from "@/types/api.interface";

const description = "List of all studio articles.";

export const Route = createFileRoute("/studios/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Studios - Obscure Hollywood" },
			{ name: "description", content: description },
			// Open Graph
			{ property: "og:site_name", content: "Obscure Hollywood" },
			{ property: "og:type", content: "article" },
			{ property: "og:title", content: "Studios" },
			{
				property: "og:description",
				content: description,
			},
			{
				property: "og:url",
				content: "https://obscurehollywood.net/studios",
			},
		],
	}),
});

function RouteComponent() {
	const { limit, orderBy, page }: UrlSearchParams = useSearch({
		from: "/studios/",
	});

	return (
		<ListPage limit={limit} orderBy={orderBy} page={page} route="studios" />
	);
}
