import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { v4 as uuidv4 } from "uuid";
import httpRequest from "@/api/httpRequest";
import Question from "@/components/article/quiz/Question";
import ScoreModal from "@/components/article/quiz/ScoreModal";
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

	// react-hook-form with default form values
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

	const [modal, setModal] = useState<HTMLDialogElement | null>(null);

	// Get modal element on page load
	useEffect(() => {
		const el = document.getElementById("score-modal") as HTMLDialogElement;
		setModal(el);
	}, []);

	// Show modal on mutation success
	useEffect(() => {
		if (modal && mutation.isSuccess) {
			modal.showModal();
		}
	}, [modal, mutation.isSuccess]);

	// Get/create user id and send mutation request.
	function onSubmit(data: FormInputs) {
		let userId = localStorage.getItem("userId");

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
		<>
			{mutation.isError && (
				<div className="toast toast-top toast-end z-50">
					<div className="alert alert-error">
						<span>
							An error occurred while processing your results. Please try again.
						</span>
					</div>
				</div>
			)}
			<ScoreModal
				modal={modal as HTMLDialogElement}
				quizName={(mutation.data?.quiz?.name as string) ?? ""}
				reset={reset}
				score={(mutation.data?.score as number) ?? 0}
			/>
			<form className="px-6 sm:px-12" onSubmit={handleSubmit(onSubmit)}>
				{questions.map((qq) => {
					return (
						<Question
							key={qq.id}
							control={control}
							errors={errors}
							isPending={mutation.isPending}
							quizQuestion={qq}
						/>
					);
				})}
				<div className="flex md:justify-center gap-4 my-8">
					<button
						className="btn btn-primary btn-lg w-full md:w-100"
						disabled={mutation.isPending}
						type="submit"
					>
						{mutation.isPending ? (
							<>
								<span className="loading loading-spinner"></span>
								Submitting...
							</>
						) : (
							"Submit"
						)}
					</button>
				</div>
			</form>
		</>
	);
}
