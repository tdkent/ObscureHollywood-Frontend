import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { v4 as uuidv4 } from "uuid";
import httpRequest from "@/api/httpRequest";
import Question from "@/components/article/quiz/Question";
import type { QuizQuestion } from "@/types/quiz.interface";
import type { FormInputs, OptionsInput } from "@/types/ui.interface";

interface Props {
	questions: QuizQuestion[];
}

export default function QuizForm({ questions }: Props) {
	const { pathname } = useLocation();

	const route = `${pathname}/result`;

	const mutation = useMutation({
		mutationFn: (options: OptionsInput) => httpRequest(route, options),
	});

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
		let userId = localStorage.getItem("userId");

		console.log(data);

		if (!userId) {
			userId = uuidv4();
			localStorage.setItem("userId", userId);
		}

		const body = {
			userId,
			answers: data,
		};

		mutation.mutate({ method: "POST", body });
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
