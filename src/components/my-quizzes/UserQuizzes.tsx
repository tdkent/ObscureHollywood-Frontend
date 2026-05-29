import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";
import RecentActivity from "@/components/my-quizzes/RecentActivity";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { UserAllQuizResults } from "@/types/quiz.interface";

interface Props {
	userId: string;
}

export default function UserQuizzes({ userId }: Props) {
	const { data, error, isPending } = useQuery({
		queryKey: ["user"],
		queryFn: () => httpRequest(`/users/${userId}`),
	});

	if (isPending) return <Loading variant="user" />;
	if (error) return <DisplayError />;

	const {
		totalCount,
		distinctCount,
		avgScore,
		quizCount,
		percentComplete,
		recentActivity,
	} = data as UserAllQuizResults;

	return (
		<div className="flex flex-col gap-8 px-6 sm:px-12 sm:gap-12">
			<section className="flex flex-col gap-4">
				<h2 className="text-secondary-text text-xl md:text-2xl">
					Overall Quiz Activity
				</h2>
				<dl>
					<div>
						<dt>Quizzes Taken</dt>
						<dd>{totalCount}</dd>
					</div>
					<div>
						<dt>Unique Quizzes Completed</dt>
						<dd>
							{distinctCount} of {quizCount}
						</dd>
					</div>
					<div>
						<dt>Completion Progress</dt>
						<dd>{percentComplete}%</dd>
					</div>
					<div>
						<dt>Average Score</dt>
						<dd>{avgScore}</dd>
					</div>
				</dl>
			</section>
			<section className="flex flex-col gap-4">
				<h2 className="text-secondary-text text-xl md:text-2xl">
					Recent Activity
				</h2>
				{recentActivity.length ? (
					<RecentActivity recentActivity={recentActivity} />
				) : (
					<p>You have not completed any quizzes yet.</p>
				)}
			</section>
		</div>
	);
}
