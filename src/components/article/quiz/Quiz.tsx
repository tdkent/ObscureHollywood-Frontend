import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import QuizForm from "@/components/article/quiz/QuizForm";
import QuizResults from "@/components/article/quiz/QuizResults";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import NotFound from "@/components/shared/NotFound";
import type { QuizWithRelations } from "@/types/quiz.interface";
import { getUserId } from "@/util/getUserId";
import httpRequest from "@/util/httpRequest";

export default function Quiz() {
	const { slug } = useParams({ from: "/quiz/$slug" });

	const { data, error, isPending } = useQuery({
		queryKey: ["quiz", slug],
		queryFn: () => httpRequest(`/quiz/${slug}`),
	});

	if (isPending) return <Loading variant="quiz" />;
	if (error) {
		if (error.message === "Resource not found") return <NotFound />;
		return <DisplayError />;
	}

	const { name, quizQuestions, slug: quizSlug } = data as QuizWithRelations;

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
