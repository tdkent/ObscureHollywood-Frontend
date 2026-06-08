import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import type { UrlSearchParams } from "@/types/api.interface";

const description = "List of all film articles.";

export const Route = createFileRoute("/films/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Films - Obscure Hollywood" },
			{ name: "description", content: description },
			// Open Graph
			{ property: "og:site_name", content: "Obscure Hollywood" },
			{ property: "og:type", content: "article" },
			{ property: "og:title", content: "Films" },
			{
				property: "og:description",
				content: description,
			},
			{ property: "og:url", content: "https://obscurehollywood.net/films" },
		],
	}),
});

function RouteComponent() {
	const { limit, orderBy, page, tag }: UrlSearchParams = useSearch({
		from: "/films/",
	});

	return (
		<ListPage
			limit={limit}
			orderBy={orderBy}
			page={page}
			route="films"
			tags={tag}
		/>
	);
}
