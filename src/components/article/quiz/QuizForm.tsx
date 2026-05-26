import { useForm } from "react-hook-form";
import Question from "@/components/article/quiz/Question";
import type { QuizQuestion } from "@/types/quiz.interface";
import type { FormInputs } from "@/types/ui.interface";

interface Props {
	questions: QuizQuestion[];
}

export default function QuizForm({ questions }: Props) {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>({
		defaultValues: {
			q1: undefined,
			q2: undefined,
			q3: undefined,
			q4: undefined,
			q5: undefined,
			q6: undefined,
			q7: undefined,
			q8: undefined,
			q9: undefined,
			q10: undefined,
		},
	});

	function onSubmit(data: FormInputs) {
		console.log(data);
	}

	return (
		<form className="px-6 sm:px-12" onSubmit={handleSubmit(onSubmit)}>
			{questions.map((qq) => {
				return (
					<Question
						key={qq.id}
						quizQuestion={qq}
						errors={errors}
						control={control}
					/>
				);
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
