import { type Control, Controller, type FieldErrors } from "react-hook-form";
import { parseHtmlToString } from "@/lib/utils/parseHtml";
import type { QuizQuestion } from "@/types/quiz.interface";
import type { FormInputs } from "@/types/ui.interface";

interface Props {
	control: Control<FormInputs>;
	errors: FieldErrors<FormInputs>;
	quizQuestion: QuizQuestion;
}

export default function Question({ control, errors, quizQuestion }: Props) {
	const { questionText, questionNumber, answerOptions } = quizQuestion;

	const question = parseHtmlToString(questionText);
	const answer1 = parseHtmlToString(answerOptions[0]);
	const answer2 = parseHtmlToString(answerOptions[1]);
	const answer3 = parseHtmlToString(answerOptions[2]);
	const answer4 = parseHtmlToString(answerOptions[3]);

	const inputName = `q${questionNumber}`;

	return (
		<div className="py-8 border-b last:border-none">
			<Controller
				name={inputName}
				control={control}
				rules={{ required: "Please select an answer" }}
				render={({ field }) => (
					<fieldset className="fieldset">
						<legend className="fieldset-legend block text-lg">
							{questionNumber}. {question}
						</legend>
						<div className="flex flex-col gap-2.5 mt-4">
							<label className="flex gap-4 items-center text-base">
								<input
									checked={field.value === "1"}
									className="radio bg-content-alt checked:bg-gold"
									type="radio"
									value={"1"}
									onChange={() => field.onChange("1")}
								/>
								{answer1}
							</label>
							<label className="flex gap-4 items-center text-base">
								<input
									checked={field.value === "2"}
									className="radio bg-content-alt checked:bg-gold"
									type="radio"
									value={"2"}
									onChange={() => field.onChange("2")}
								/>
								{answer2}
							</label>
							<label className="flex gap-4 items-center text-base">
								<input
									checked={field.value === "3"}
									className="radio bg-content-alt checked:bg-gold"
									type="radio"
									value={"3"}
									onChange={() => field.onChange("3")}
								/>
								{answer3}
							</label>
							<label className="flex gap-4 items-center text-base">
								<input
									checked={field.value === "4"}
									className="radio bg-content-alt checked:bg-gold"
									type="radio"
									value={"4"}
									onChange={() => field.onChange("4")}
								/>
								{answer4}
							</label>
						</div>
					</fieldset>
				)}
			/>
			{errors[inputName] && (
				<div role="alert" className="alert alert-error alert-soft mt-4">
					<span>Please select an answer!</span>
				</div>
			)}
		</div>
	);
}
