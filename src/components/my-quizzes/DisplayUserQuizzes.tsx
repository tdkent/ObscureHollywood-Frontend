import UserQuizzes from "@/components/my-quizzes/UserQuizzes";
import { getUserId } from "@/util/getUserId";

export default function DisplayUserQuizzes() {
	const userId = getUserId();

	if (!userId) {
		return (
			<p className="px-6 sm:px-12">You have not completed any quizzes yet.</p>
		);
	}

	return <UserQuizzes userId={userId} />;
}
