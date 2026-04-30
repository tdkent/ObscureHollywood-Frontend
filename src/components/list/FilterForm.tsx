import type { Dispatch, SetStateAction } from "react";
import React from "react";
import { useSearchParams } from "react-router";
import type { Tag } from "@/types/tag.interface";
import type { SortValue } from "@/types/ui.interface";

interface Props {
	filmsPending: boolean;
	filters: string[];
	limitParam: number;
	setFilters: Dispatch<SetStateAction<string[]>>;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
	sortParam: SortValue;
	tagParams: string[];
	tags: Tag[];
}

export default function FilterForm({
	filmsPending,
	filters,
	limitParam,
	setFilters,
	setIsOpen,
	sortParam,
	tags,
}: Props) {
	// const [filters, setFilters] = useState<string[]>(tagParams);
	const [_, setSearchParams] = useSearchParams();

	const types: Tag["type"][] = ["decade", "genre", "production", "theme"];

	function handleCheck(
		e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
	) {
		const selected = e.currentTarget.value;

		let selectedFilters: string[] = [];

		switch (true) {
			// If user selects a filter that is already selected, filter it out
			case filters.includes(selected): {
				selectedFilters = [...filters.filter((tag) => tag !== selected)];
				break;
			}

			// If selected filter is a radio input, remove all other tags of same type
			case e.currentTarget.type === "radio": {
				const tagType = selected.split("-")[0];
				selectedFilters = [
					...filters.filter((tag) => !tag.startsWith(tagType)),
					selected,
				];
				break;
			}

			default: {
				selectedFilters = [...filters, selected];
			}
		}

		setFilters(selectedFilters.sort());
	}

	function handleApply() {
		setIsOpen(false);
		const params = `?page=1&limit=${limitParam}&orderBy=${sortParam}`;
		const tagParams = filters.length ? `&tag=${filters.join("&tag=")}` : "";
		setSearchParams(`${params}${tagParams}`);
	}

	return (
		<form>
			{types.map((type) => {
				const legend = `${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;

				return (
					<fieldset key={type} className="fieldset">
						<legend className="fieldset-legend text-lg">{legend}</legend>
						<div className="flex flex-col gap-2.5">
							{tags
								.filter((tag) => tag.type === type)
								.map((tag) => {
									const useRadio = type === "decade" || type === "genre";
									const isChecked = filters.includes(tag.slug);
									const disableInput =
										filmsPending || (!isChecked && filters.length >= 5);

									return (
										<React.Fragment key={tag.id}>
											{useRadio ? (
												<label className="flex gap-2.5 items-center text-base">
													<input
														checked={isChecked}
														className="radio bg-bg-accent checked:bg-gold"
														disabled={disableInput}
														name={type}
														onChange={handleCheck}
														type="radio"
														value={tag.slug}
													/>
													{tag.name}
												</label>
											) : (
												<label className="flex gap-2.5 items-center text-base">
													<input
														checked={isChecked}
														className="checkbox bg-bg-accent checked:bg-gold"
														disabled={disableInput}
														onChange={handleCheck}
														type="checkbox"
														value={tag.slug}
													/>
													{tag.name}
												</label>
											)}
										</React.Fragment>
									);
								})}
						</div>
					</fieldset>
				);
			})}

			{/* Form controls */}
			<div className="flex gap-4 my-8">
				{/* Reset all inputs */}
				<button
					className="btn btn-soft"
					onClick={() => setFilters([])}
					type="button"
				>
					Reset
				</button>

				{/* Close modal and invoke handler function */}
				<button className="btn btn-neutral" type="button" onClick={handleApply}>
					Apply
				</button>
			</div>
		</form>
	);
}
