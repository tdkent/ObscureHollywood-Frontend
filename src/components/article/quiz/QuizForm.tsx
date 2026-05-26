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
		reset,
	} = useForm<FormInputs>({
		defaultValues: {
			1: undefined,
			2: undefined,
			3: undefined,
			4: undefined,
			5: undefined,
			6: undefined,
			7: undefined,
			8: undefined,
			9: undefined,
			10: undefined,
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
				<button className="btn btn-soft" type="button" onClick={() => reset()}>
					Reset
				</button>
				<button className="btn btn-primary" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
}
