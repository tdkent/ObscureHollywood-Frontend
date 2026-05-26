import { useForm } from "react-hook-form";
import Question from "@/components/article/quiz/Question";
import type { QuizQuestion } from "@/types/quiz.interface";

interface Props {
	questions: QuizQuestion[];
}

interface FormInputs {
	[key: string]: string;
}

export default function QuizForm({ questions }: Props) {
	const { register, handleSubmit } = useForm<FormInputs>();

	function onSubmit(data: FormInputs) {
		console.log(data);
	}

	return (
		<form className="px-6 sm:px-12" onSubmit={handleSubmit(onSubmit)}>
			{questions.map((qq) => {
				return <Question key={qq.id} quizQuestion={qq} register={register} />;
			})}

			<div className="flex gap-4 my-8">
				<button className="btn btn-soft" type="reset">
					Reset
				</button>
				<button className="btn btn-primary" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
}
