import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import type { UrlSearchParams } from "@/types/api.interface";

export const Route = createFileRoute("/features/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Features - Obscure Hollywood" },
			{ name: "description", content: "List of all feature articles." },
		],
	}),
});

function RouteComponent() {
	const { limit, orderBy, page }: UrlSearchParams = useSearch({
		from: "/features/",
	});

	return (
		<ListPage limit={limit} orderBy={orderBy} page={page} route="features" />
	);
}
