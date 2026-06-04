import type { Dispatch, SetStateAction } from "react";
import type { UseFormReset } from "react-hook-form";
import type { FormInputs } from "@/types/ui.interface";
import { createScoreMsg } from "@/util/createScoreMsg";

interface Props {
	modal: HTMLDialogElement;
	quizName: string;
	reset: UseFormReset<FormInputs>;
	score: number;
	setShowResults: Dispatch<SetStateAction<boolean>>;
}

export default function ScoreModal({ modal, quizName, score }: Props) {
	const msg = createScoreMsg(score);

	function handleClick() {
		modal.close();
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	return (
		<dialog id="score-modal" className="modal">
			<div className="modal-box font-bodini-moda">
				<h3 className="text-xl text-center">Quiz: {quizName}</h3>
				<div className="flex flex-col my-4 border-y">
					<div className="py-4 text-center text-lg flex flex-col gap-4">
						<p className="">Your score is...</p>
						<h2 className="text-8xl text-primary">{score}/10</h2>
						<p className="text-xl italic">{msg}</p>
					</div>
				</div>
				<div className="modal-action flex flex-col gap-4 font-open-sans">
					<button
						className="btn btn-soft btn-lg"
						onClick={handleClick}
						type="button"
					>
						View Results
					</button>
				</div>
			</div>
		</dialog>
	);
}
