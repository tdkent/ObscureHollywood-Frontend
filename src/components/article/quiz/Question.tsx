import { parseHtmlToString } from "@/lib/utils/parseHtml";
import type { QuizQuestion } from "@/types/quiz.interface";

interface Props {
	quizQuestion: QuizQuestion;
}

export default function Question({ quizQuestion }: Props) {
	const { questionText, questionNumber, answerOptions } = quizQuestion;

	const question = parseHtmlToString(questionText);
	const answer1 = parseHtmlToString(answerOptions[0]);
	const answer2 = parseHtmlToString(answerOptions[1]);
	const answer3 = parseHtmlToString(answerOptions[2]);
	const answer4 = parseHtmlToString(answerOptions[3]);

	return (
		<div className="py-8 border-b last:border-none">
			<fieldset className="fieldset">
				<legend className="fieldset-legend block text-lg">
					{questionNumber}. {question}
				</legend>
				<div className="flex flex-col gap-2.5 mt-4">
					<label className="flex gap-4 items-center text-base">
						<input
							className="radio bg-content-alt checked:bg-gold"
							name={`question-${questionNumber}`}
							type="radio"
							value={1}
						/>
						{answer1}
					</label>
					<label className="flex gap-4 items-center text-base">
						<input
							className="radio flex-none bg-content-alt checked:bg-gold"
							name={`question-${questionNumber}`}
							type="radio"
							value={2}
						/>
						{answer2}
					</label>
					<label className="flex gap-4 items-center text-base">
						<input
							className="radio bg-content-alt checked:bg-gold"
							name={`question-${questionNumber}`}
							type="radio"
							value={3}
						/>
						{answer3}
					</label>
					<label className="flex gap-4 items-center text-base">
						<input
							className="radio bg-content-alt checked:bg-gold"
							name={`question-${questionNumber}`}
							type="radio"
							value={4}
						/>
						{answer4}
					</label>
				</div>
			</fieldset>
		</div>
	);
}
