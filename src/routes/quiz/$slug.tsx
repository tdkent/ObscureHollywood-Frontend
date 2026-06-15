import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import Quiz from "@/components/article/quiz/Quiz";
import Loading from "@/components/shared/Loading";
import SlugPageError from "@/components/shared/SlugPageError";
import { DOMAIN_URL, IMG_ASSETS_URL } from "@/constants/api.constants";
import type { QuizWithRelations } from "@/types/quiz.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export const Route = createFileRoute("/quiz/$slug")({
	loader: async ({ context, params }) => {
		const quiz = (await context.queryClient.ensureQueryData(
			articleQueryOptions({
				route: "quiz",
				slug: params.slug,
			}),
		)) as QuizWithRelations;

		const title = `Quiz: ${quiz.name} - Obscure Hollywood`;

		const description = `Test your knowledge with this fun 10-question quiz!`;

		const imgUrl = `${IMG_ASSETS_URL}/${params.slug}@1024.jpeg`;

		const canonicalUrl = `${DOMAIN_URL}quiz/${params.slug}`;

		return { quiz, title, description, canonicalUrl, imgUrl };
	},
	component: RouteComponent,
	errorComponent: ({ error }) => <SlugPageError error={error} />,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData ? loaderData.title : "Obscure Hollywood",
			},
			{
				name: "description",
				content: loaderData?.description,
			},
			// Open Graph
			{ property: "og:site_name", content: "Obscure Hollywood" },
			{ property: "og:type", content: "article" },
			{
				property: "og:title",
				content: loaderData?.quiz.name,
			},
			{
				property: "og:description",
				content: loaderData?.description,
			},
			{ property: "og:url", content: loaderData?.canonicalUrl },
			{ property: "og:image", content: loaderData?.imgUrl },
			{ property: "og:image:type", content: "image/jpeg" },
			{ property: "og:image:width", content: "1024" },
			{ property: "og:image:height", content: "731" },
		],
		links: [
			{
				rel: "canonical",
				href: loaderData?.canonicalUrl,
			},
		],
	}),
});

function RouteComponent() {
	return (
		<div className="page-margins bg-content">
			<Suspense fallback={<Loading variant="quiz" />}>
				<Quiz />
			</Suspense>
		</div>
	);
}
