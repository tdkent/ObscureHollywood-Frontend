import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import type { UrlSearchParams } from "@/types/api.interface";

export const Route = createFileRoute("/films/")({
	component: RouteComponent,
	head: () => ({
		meta: [{ title: "Films - Obscure Hollywood" }],
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
