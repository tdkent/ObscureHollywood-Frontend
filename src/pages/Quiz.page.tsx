import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import ArticleHeader from "@/components/article/ArticleHeader";
import QuizForm from "@/components/article/quiz/QuizForm";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { Quiz } from "@/types/quiz.interface";
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

	const { name, quizQuestions, slug: quizSlug } = data as Quiz;

	return (
		<div className="page-margins bg-content">
			<div className="flex flex-col gap-8 my-4 sm:gap-12">
				<ArticleHeader name={`Quiz: ${name}`} slug={quizSlug} />
				<QuizForm questions={quizQuestions} quizName={name} />
			</div>
		</div>
	);
}
