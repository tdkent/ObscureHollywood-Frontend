import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import type { UrlSearchParams } from "@/types/api.interface";

export const Route = createFileRoute("/studios/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Studios - Obscure Hollywood" },
			{ name: "description", content: "List of all studio articles." },
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
