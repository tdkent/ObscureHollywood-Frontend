import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import ArticleHeader from "@/components/article/ArticleHeader";
import QuizForm from "@/components/article/quiz/QuizForm";
import QuizResults from "@/components/article/quiz/QuizResults";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { QuizWithRelations } from "@/types/quiz.interface";
import type { Entity } from "@/types/ui.interface";

export default function QuizPage() {
	const { slug } = useParams();
	const { pathname } = useLocation();

	const entity: Entity = "quiz";

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading variant="article" />;
	if (error) return <DisplayError />;

	const { name, quizQuestions, slug: quizSlug } = data as QuizWithRelations;

	const userId = localStorage.getItem("userId");

	return (
		<div className="page-margins bg-content">
			<div className="flex flex-col my-4 sm:gap-12">
				<ArticleHeader name={`Quiz: ${name}`} slug={quizSlug}>
					<div className="border-y py-4 bg-content-alt px-6 font-light sm:px-12 lg:mt-4">
						{userId ? (
							<QuizResults userId={userId} />
						) : (
							<p>You have not attempted this quiz yet.</p>
						)}
					</div>
				</ArticleHeader>
				<QuizForm questions={quizQuestions} quizName={name} />
			</div>
		</div>
	);
}
