import { createScoreMsg } from "@/lib/utils/createScoreMsg";

interface Props {
	quizName: string;
	score: number;
}

export default function ScoreModal({ quizName, score }: Props) {
	const msg = createScoreMsg(score);

	return (
		<dialog id="score-modal" className="modal">
			<div className="modal-box font-bodini-moda">
				<h3 className="text-xl text-center">Quiz: {quizName}</h3>
				<div className="flex flex-col my-4 border-y">
					<p className="py-4 text-center text-lg flex flex-col gap-4">
						<span className="">Your score is...</span>
						<span className="text-8xl text-primary">{score}/10</span>
						<span className="text-xl italic">{msg}</span>
					</p>
				</div>
				<div className="modal-action">
					<form method="dialog">
						{/** biome-ignore lint/a11y/useButtonType: cannot close modal if type is specified */}
						<button className="btn font-open-sans">Close</button>
					</form>
				</div>
			</div>
		</dialog>
	);
}
