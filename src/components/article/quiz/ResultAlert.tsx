import { CircleCheck, CircleX } from "lucide-react";

interface Props {
	isCorrect: boolean;
}

export default function ResultAlert({ isCorrect }: Props) {
	return (
		<div
			className={`alert alert-soft mt-4 ${isCorrect ? "alert-success" : "alert-error"}`}
		>
			<span className="flex items-center gap-2">
				{isCorrect ? (
					<>
						<CircleCheck className="size-4" />
						Correct answer!
					</>
				) : (
					<>
						<CircleX className="size-4" />
						Incorrect, try again!
					</>
				)}
			</span>
		</div>
	);
}
