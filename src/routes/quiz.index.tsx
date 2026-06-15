import { createFileRoute, useSearch } from "@tanstack/react-router";
import ListPage from "@/components/layout/containers/ListPage";
import { DOMAIN_URL } from "@/constants/api.constants";
import type { UrlSearchParams } from "@/types/api.interface";

const description = "List of all quizzes.";
const canonicalUrl = `${DOMAIN_URL}quiz`;

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
				content: canonicalUrl,
			},
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
		from: "/quiz/",
	});

	return <ListPage orderBy={orderBy} page={page} route="quiz" />;
}
