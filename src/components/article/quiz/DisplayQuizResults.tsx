import QuizResults from "@/components/article/quiz/QuizResults";
import { getUserId } from "@/util/getUserId";

export default function DisplayQuizResults() {
	const userId = getUserId();

	if (!userId) {
		return <p>You have not completed this quiz yet.</p>;
	}

	return <QuizResults userId={userId} />;
}
