import { useSuspenseQuery } from "@tanstack/react-query";
import { ClientOnly, Link, useParams } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import DisplayQuizResults from "@/components/article/quiz/DisplayQuizResults";
import QuizForm from "@/components/article/quiz/QuizForm";
import type { QuizWithRelations } from "@/types/quiz.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export default function Quiz() {
	const { slug } = useParams({ from: "/quiz/$slug" });

	const quizQuery = useSuspenseQuery(
		articleQueryOptions({
			route: "quiz",
			slug,
		}),
	);

	const {
		name,
		quizQuestions,
		slug: quizSlug,
	} = quizQuery.data as QuizWithRelations;

	return (
		<div className="flex flex-col my-4 sm:gap-12 lg:mt-0">
			<ArticleHeader name={`Quiz: ${name}`} slug={quizSlug}>
				<div className="flex flex-col gap-2 border-y py-4 bg-content-alt px-6 font-light sm:px-12 lg:mt-4">
					<ClientOnly>
						<DisplayQuizResults />
					</ClientOnly>
					<Link className="content-link" to="/my-quizzes">
						View your quiz history
					</Link>
				</div>
			</ArticleHeader>
			<ClientOnly>
				<QuizForm questions={quizQuestions} quizName={name} />
			</ClientOnly>
		</div>
	);
}
