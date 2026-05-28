import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";
import type { UserSingleQuizResults } from "@/types/quiz.interface";

interface Props {
	slug: string;
	userId: string;
}

export default function QuizResults({ slug, userId }: Props) {
	const { data, error, isLoading } = useQuery({
		queryKey: [userId, slug],
		queryFn: () => httpRequest(`/users/${userId}/quiz-results/${slug}`),
	});

	if (isLoading) return "loading";
	if (error)
		return <p className="text-sm text-error">Could not fetch quiz results.</p>;

	const { count, highScore, prevScore } = data as UserSingleQuizResults;

	return count ? (
		<div className="flex flex-col gap-2">
			<p className="text-sm">
				You have attempted this quiz {count} time{count > 1 && "s"}.
			</p>
			<p>High score: {highScore}</p>
			<p>Latest score: {prevScore}</p>
		</div>
	) : (
		<p className="text-sm">You have not attempted this quiz yet.</p>
	);
}
