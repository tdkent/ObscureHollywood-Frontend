import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import Quiz from "@/components/article/quiz/Quiz";
import Loading from "@/components/shared/Loading";
import SlugPageError from "@/components/shared/SlugPageError";
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

		return { quiz, title, description };
	},
	component: RouteComponent,
	errorComponent: ({ error }) => <SlugPageError error={error} />,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData ? loaderData.title : "Quiz - Obscure Hollywood",
			},
			{
				name: "description",
				content: loaderData ? loaderData.description : "Quiz",
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
