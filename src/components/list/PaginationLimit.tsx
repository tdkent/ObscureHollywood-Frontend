import { useNavigate } from "@tanstack/react-router";
import type { Entity } from "@/types/ui.interface";

interface Props {
	currLimit: number;
	route: Entity;
	searchParam: string | undefined;
	sortParam: string;
	tagsParam: string[] | undefined;
}

export default function PaginationLimit({
	currLimit,
	route,
	searchParam,
	sortParam,
	tagsParam,
}: Props) {
	const navigate = useNavigate({ from: `/${route}` });
	const LIMIT_OPTIONS = [25, 50];

	return (
		<div className="flex justify-between items-center md:justify-start">
			<span className="md:w-30 lg:w-24">Per page:</span>
			<div className="flex gap-4 w-3/5 sm:w-2/5 md:w-50">
				{LIMIT_OPTIONS.map((option) => {
					const selected = option === currLimit;
					return (
						<button
							className={`btn grow ${selected ? "btn-disabled" : "btn-soft"}`}
							key={option}
							type="button"
							disabled={selected}
							onClick={() => {
								navigate({
									to: `/${route}`,
									search: {
										page: 1,
										limit: option,
										orderBy: sortParam,
										q: searchParam,
										tag: tagsParam,
									},
								});
							}}
						>
							{option}
						</button>
					);
				})}
			</div>
		</div>
	);
}
