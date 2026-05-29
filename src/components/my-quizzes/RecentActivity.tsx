import { DateTime } from "luxon";
import type { QuizResultWithRelations } from "@/types/quiz.interface";

interface Props {
	recentActivity: QuizResultWithRelations[];
}

export default function RecentActivity({ recentActivity }: Props) {
	return (
		<ul className="list lg:max-w-200">
			{recentActivity.map(({ id, createdAt, quiz, score }) => {
				const relativeDate = DateTime.fromISO(createdAt).toRelativeCalendar();

				return (
					<li
						key={id}
						className="list-row items-center px-0 flex justify-between"
					>
						<span className="sm:text-base sm:w-1/2">{quiz.name}</span>
						<div className="grow flex justify-end items-center gap-6 text-xs sm:text-sm sm:justify-between">
							<span className="shrink-0">{relativeDate}</span>
							<span>{score}/10</span>
						</div>
					</li>
				);
			})}
		</ul>
	);
}
