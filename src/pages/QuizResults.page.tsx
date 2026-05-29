import { getUserId } from "@/lib/utils/getUserId";

export default function QuizResultsPage() {
	const userId = getUserId();

	return (
		<div className="page-margins bg-content">
			<div className="my-4 px-6 sm:px-12">
				<h1 className="text-3xl md:text-4xl">My Quizzes</h1>
			</div>
		</div>
	);
}
