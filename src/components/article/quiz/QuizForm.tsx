import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
import httpRequest from "@/api/httpRequest";
import Question from "@/components/article/quiz/Question";
import ScoreModal from "@/components/article/quiz/ScoreModal";
import { getUserId } from "@/lib/utils/getUserId";
import type { QuizQuestion, QuizResult } from "@/types/quiz.interface";
import type { FormInputs, OptionsInput } from "@/types/ui.interface";

interface Props {
	questions: QuizQuestion[];
	quizName: string;
}

export default function QuizForm({ questions, quizName }: Props) {
	const { pathname } = useLocation();
	const { slug } = useParams();

	const route = `${pathname}/result`;

	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: (options: OptionsInput) => httpRequest(route, options),
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ["quiz-results", slug] });
		},
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
	const [showResults, setShowResults] = useState(false);

	// Get modal element on page load
	useEffect(() => {
		const el = document.getElementById("score-modal") as HTMLDialogElement;
		setModal(el);
	}, []);

	// Show modal on mutation success
	useEffect(() => {
		if (modal && mutation.isSuccess) {
			modal.showModal();
			setShowResults(true);
		}
	}, [modal, mutation.isSuccess]);

	// Get/create user id and send mutation request.
	function onSubmit(data: FormInputs) {
		setShowResults(false);

		let userId = getUserId();

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

	// Reset form and scroll to top
	function handleReset() {
		reset();
		setShowResults(false);
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
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
				quizName={quizName}
				reset={reset}
				score={(mutation.data as QuizResult)?.score as number}
				setShowResults={setShowResults}
			/>

			<form className="px-6 sm:px-12" onSubmit={handleSubmit(onSubmit)}>
				{questions.map((qq) => {
					const isCorrect = (mutation.data as QuizResult)?.correct.includes(
						qq.questionNumber,
					);
					return (
						<Question
							key={qq.id}
							control={control}
							errors={errors}
							isCorrect={isCorrect}
							isPending={mutation.isPending}
							quizQuestion={qq}
							showResults={showResults}
						/>
					);
				})}
				<div className="flex flex-col items-center gap-4 my-8">
					<button
						className="btn btn-primary btn-lg w-full md:w-100"
						disabled={mutation.isPending || showResults}
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
					{showResults && (
						<button
							className="btn btn-primary btn-lg w-full md:w-100"
							onClick={handleReset}
							type="button"
						>
							Try Again?
						</button>
					)}
				</div>
			</form>
		</>
	);
}
