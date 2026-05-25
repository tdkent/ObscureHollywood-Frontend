import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import ArticleHeader from "@/components/article/ArticleHeader";
import Question from "@/components/article/quiz/Question";
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

	function formAction(formData: FormData) {}

	return (
		<div className="page-margins bg-content">
			<div className="flex flex-col gap-8 my-4 sm:gap-12">
				<ArticleHeader name={`Quiz: ${name}`} slug={quizSlug} />
				<form className="px-6 sm:px-12" action={formAction}>
					{quizQuestions.map((qq) => {
						return <Question key={qq.id} quizQuestion={qq} />;
					})}

					<div className="flex gap-4 my-8">
						<button className="btn btn-soft" type="reset">
							Reset
						</button>
						<button className="btn btn-primary" type="submit">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
