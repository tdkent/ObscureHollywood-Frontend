import { useQuery } from "@tanstack/react-query";
import { CircleQuestionMark } from "lucide-react";
import RecentActivity from "@/components/my-quizzes/RecentActivity";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { UserAllQuizResults } from "@/types/quiz.interface";
import httpRequest from "@/util/httpRequest";

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
			<details className="collapse">
				<summary className="collapse-title font-semibold flex items-center gap-2 px-0 text-link">
					<CircleQuestionMark className="size-4" />
					How your data is stored
				</summary>
				<div className="collapse-content text-sm lg:w-200">
					Your quiz results are stored locally on your device and are not linked
					to personal information. They are only available in this browser.
					Clearing browser storage may permanently remove your saved quiz data.
				</div>
			</details>
		</div>
	);
}
