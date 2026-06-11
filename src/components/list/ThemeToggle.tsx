import { type Dispatch, type SetStateAction, useEffect } from "react";

interface Props {
	useCardTheme: boolean;
	setUseCardTheme: Dispatch<SetStateAction<boolean>>;
}

export default function ThemeToggle({ useCardTheme, setUseCardTheme }: Props) {
	useEffect(() => {
		if (useCardTheme) {
			localStorage.setItem("useCardTheme", "true");
		} else {
			localStorage.removeItem("useCardTheme");
		}
	}, [useCardTheme]);

	function handleChange() {
		setUseCardTheme((prev) => !prev);
	}

	return (
		<div className="px-6">
			<label className="flex cursor-pointer gap-2 text-sm">
				<span className="label-text">List</span>
				<input
					type="checkbox"
					value="card"
					onChange={handleChange}
					className="toggle"
					defaultChecked={useCardTheme}
				/>
				<span className="label-text">Card</span>
			</label>
		</div>
	);
}
