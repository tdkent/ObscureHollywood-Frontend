import { type Control, Controller, type FieldErrors } from "react-hook-form";
import RadioGroup from "@/components/article/quiz/RadioGroup";
import ResultAlert from "@/components/article/quiz/ResultAlert";
import { parseHtmlToString } from "@/lib/utils/parseHtml";
import type { QuizQuestion } from "@/types/quiz.interface";
import type { FormInputs } from "@/types/ui.interface";

interface Props {
	control: Control<FormInputs>;
	errors: FieldErrors<FormInputs>;
	isCorrect: boolean;
	isPending: boolean;
	quizQuestion: QuizQuestion;
	showResults: boolean;
}

export default function Question({
	control,
	errors,
	isCorrect,
	isPending,
	quizQuestion,
	showResults,
}: Props) {
	const { questionText, questionNumber, answerOptions } = quizQuestion;

	const question = parseHtmlToString(questionText);

	const inputName = `${questionNumber}`;

	return (
		<div className="py-8 border-b last:border-none">
			<Controller
				name={inputName}
				control={control}
				rules={{ required: "Please select an answer" }}
				render={({ field }) => (
					<fieldset className="fieldset">
						<legend className={`fieldset-legend block text-lg`}>
							{questionNumber}. {question}
						</legend>
						<div className="flex flex-col gap-2.5 mt-4">
							{answerOptions.map((ans, idx) => {
								return (
									<RadioGroup
										key={ans}
										answerText={parseHtmlToString(ans)}
										field={field}
										idx={idx}
										isPending={isPending}
										showResults={showResults}
									/>
								);
							})}
						</div>
						{showResults && <ResultAlert isCorrect={isCorrect} />}
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
