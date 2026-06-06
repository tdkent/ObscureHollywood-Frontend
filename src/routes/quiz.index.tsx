import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import type { UrlSearchParams } from "@/types/api.interface";

export const Route = createFileRoute("/quiz/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Quizzes - Obscure Hollywood" },
			{ name: "description", content: "List of all quizzes." },
		],
	}),
});

function RouteComponent() {
	const { limit, orderBy, page }: UrlSearchParams = useSearch({
		from: "/quiz/",
	});

	return <ListPage limit={limit} orderBy={orderBy} page={page} route="quiz" />;
}
