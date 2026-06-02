import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import type { UrlSearchParams } from "@/types/api.interface";

export const Route = createFileRoute("/people")({
	component: RouteComponent,
});

function RouteComponent() {
	const { limit, orderBy, page }: UrlSearchParams = useSearch({
		from: "/people",
	});

	return (
		<ListPage limit={limit} orderBy={orderBy} page={page} route="people" />
	);
}
