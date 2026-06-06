import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import Quiz from "@/components/article/quiz/Quiz";
import Loading from "@/components/shared/Loading";
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

		const description = `Test your knowledge with this fun 10-question quiz!`;

		return { quiz, description };
	},
	component: RouteComponent,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData
					? `Quiz: ${loaderData.quiz.name} - Obscure Hollywood`
					: "Not Found - Obscure Hollywood",
			},
			{
				name: "description",
				content: loaderData?.description,
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
