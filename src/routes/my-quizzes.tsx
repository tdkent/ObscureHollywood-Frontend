import { createFileRoute } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import UserQuizzes from "@/components/my-quizzes/UserQuizzes";
import { getUserId } from "@/util/getUserId";

export const Route = createFileRoute("/my-quizzes")({
	component: RouteComponent,
});

function RouteComponent() {
	const userId = getUserId();

	return (
		<div className="page-margins bg-content">
			<div className="flex flex-col my-4 gap-6 sm:gap-12">
				<ArticleHeader name="My Quizzes" />
				{userId ? (
					<UserQuizzes userId={userId} />
				) : (
					<p className="px-6 sm:px-12">
						You have not completed any quizzes yet.
					</p>
				)}
			</div>
		</div>
	);
}
