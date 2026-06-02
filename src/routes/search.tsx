import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";

export const Route = createFileRoute("/search")({
	component: RouteComponent,
});

function RouteComponent() {
	const { q }: { q: string } = useSearch({ from: "/search" });

	return <ListPage route="search" searchString={q} />;
}
