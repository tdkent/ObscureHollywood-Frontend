import { useSuspenseQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import QuizForm from "@/components/article/quiz/QuizForm";
import QuizResults from "@/components/article/quiz/QuizResults";
import type { QuizWithRelations } from "@/types/quiz.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";
import { getUserId } from "@/util/getUserId";

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

	const userId = getUserId();
	return (
		<div className="flex flex-col my-4 sm:gap-12 lg:mt-0">
			<ArticleHeader name={`Quiz: ${name}`} slug={quizSlug}>
				<div className="flex flex-col gap-2 border-y py-4 bg-content-alt px-6 font-light sm:px-12 lg:mt-4">
					{userId ? (
						<QuizResults userId={userId} />
					) : (
						<p>You have not completed this quiz yet.</p>
					)}
					<Link className="content-link" to="/my-quizzes">
						View your quiz history
					</Link>
				</div>
			</ArticleHeader>
			<QuizForm questions={quizQuestions} quizName={name} />
		</div>
	);
}
