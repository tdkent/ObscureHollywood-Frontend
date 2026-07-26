import type { ControllerRenderProps } from "react-hook-form";
import type { FormInputs } from "@/types/ui.interface";

interface Props {
	answerText: string;
	field: ControllerRenderProps<FormInputs, string>;
	idx: number;
	isPending: boolean;
	showResults: boolean;
}

export default function RadioGroup({
	answerText,
	field,
	idx,
	isPending,
	showResults,
}: Props) {
	const inputValue = `${idx + 1}`;
	return (
		<label
			className={`flex gap-4 items-center text-base w-fit ${!showResults && "cursor-pointer"}`}
		>
			<input
				checked={field.value === inputValue}
				className="radio bg-content-alt checked:bg-gold"
				disabled={isPending || showResults}
				type="radio"
				value={inputValue}
				onChange={() => field.onChange(inputValue)}
			/>
			<div>{answerText}</div>
		</label>
	);
}
