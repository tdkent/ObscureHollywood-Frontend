import { useSearchParams } from "react-router";

interface Props {
	currLimit: number;
	searchParam: string | null;
	sortParam: string;
	tagsParamString: string;
}

export default function PaginationLimit({
	currLimit,
	searchParam,
	sortParam,
	tagsParamString,
}: Props) {
	const [_, setSearchParams] = useSearchParams();

	const limitOptions = [25, 50];

	let params = `&orderBy=${sortParam}`;
	if (searchParam) params += `&q=${searchParam}`;
	if (tagsParamString) params += tagsParamString;

	return (
		<div className="flex justify-between items-center md:justify-start">
			<span className="md:w-30 lg:w-24">Per page:</span>
			<div className="flex gap-4 w-3/5 sm:w-2/5 md:w-50">
				{limitOptions.map((option) => {
					const selected = option === currLimit;
					return (
						<button
							className={`btn grow ${selected ? "btn-disabled" : "btn-soft"}`}
							key={option}
							type="button"
							disabled={selected}
							onClick={() =>
								setSearchParams(`?page=1&limit=${option}${params}`)
							}
						>
							{option}
						</button>
					);
				})}
			</div>
		</div>
	);
}
