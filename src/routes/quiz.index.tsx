import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import type { UrlSearchParams } from "@/types/api.interface";

const description = "List of all quizzes.";

export const Route = createFileRoute("/quiz/")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "Quizzes - Obscure Hollywood" },
			{ name: "description", content: description },
			// Open Graph
			{ property: "og:site_name", content: "Obscure Hollywood" },
			{ property: "og:type", content: "article" },
			{ property: "og:title", content: "Quizzes" },
			{
				property: "og:description",
				content: description,
			},
			{
				property: "og:url",
				content: "https://obscurehollywood.net/quiz",
			},
		],
	}),
});

function RouteComponent() {
	const { limit, orderBy, page }: UrlSearchParams = useSearch({
		from: "/quiz/",
	});

	return <ListPage limit={limit} orderBy={orderBy} page={page} route="quiz" />;
}
