import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import Loading from "@/components/shared/Loading";
import type { UserSingleQuizResults } from "@/types/quiz.interface";
import httpRequest from "@/util/httpRequest";

interface Props {
	userId: string;
}

export default function QuizResults({ userId }: Props) {
	const { slug } = useParams();
	const { data, error, isLoading } = useQuery({
		queryKey: ["result", slug],
		queryFn: () => httpRequest(`/users/${userId}/quiz-results/${slug}`),
	});

	if (isLoading) return <Loading variant="results" />;
	if (error)
		return <p className="text-sm text-error">Could not fetch quiz results.</p>;

	const { count, highScore, prevScore } = data as UserSingleQuizResults;

	return count ? (
		<div className="flex flex-col gap-2">
			<p>
				You've completed this quiz {count} time{count > 1 && "s"}.
			</p>
			<p>Best score: {highScore}</p>
			<p>Last attempt: {prevScore}</p>
		</div>
	) : (
		<p>You have not completed this quiz yet.</p>
	);
}
