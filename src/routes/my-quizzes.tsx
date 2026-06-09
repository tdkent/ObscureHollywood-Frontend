import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import DisplayUserQuizzes from "@/components/my-quizzes/DisplayUserQuizzes";
import { DOMAIN_URL } from "@/constants/api.constants";

const description = "Quiz results page";
const canonicalUrl = `${DOMAIN_URL}my-quizzes`;

export const Route = createFileRoute("/my-quizzes")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{ title: "My Quizzes - Obscure Hollywood" },
			{ name: "description", content: description },
			// Open Graph
			{ property: "og:site_name", content: "Obscure Hollywood" },
			{ property: "og:type", content: "article" },
			{ property: "og:title", content: "My Quizzes" },
			{
				property: "og:description",
				content: description,
			},
			{
				property: "og:url",
				content: canonicalUrl,
			},
			//? Temp disable robots
			{ name: "robots", content: "noindex,nofollow" },
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
	return (
		<div className="page-margins bg-content">
			<div className="flex flex-col my-4 gap-6 sm:gap-12">
				<ArticleHeader name="My Quizzes" />
				<ClientOnly>
					<DisplayUserQuizzes />
				</ClientOnly>
			</div>
		</div>
	);
}
