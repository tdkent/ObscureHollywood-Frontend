import { Link, useNavigate } from "@tanstack/react-router";
import { X } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import type { PaginatedResponse } from "@/types/paginated-response.interface";

interface Props {
	hasData: boolean;
	metadata: PaginatedResponse["meta"];
	setFilters: Dispatch<SetStateAction<string[]>>;
	showFilterControls: boolean;
	sortParam: string;
	tagsParam: string[] | undefined;
}

export default function PaginationMetadata({
	hasData,
	metadata,
	setFilters,
	showFilterControls,
	sortParam,
	tagsParam,
}: Props) {
	const navigate = useNavigate({ from: "/films/" });

	/** Remove selected tag and reconstruct search url. */
	function handleClick(selected: string) {
		if (!tagsParam?.length) return;

		const removeSelected = tagsParam.filter((tag) => tag !== selected).sort();
		setFilters(removeSelected);

		navigate({
			to: "/films",
			search: {
				page: 1,
				orderBy: sortParam,
				tag: removeSelected,
			},
		});
	}
	return (
		<div className="flex flex-col gap-6 text-base sm:text-lg">
			{hasData ? (
				<p>
					Showing items {metadata.firstItemOnPage} – {metadata.lastItemOnPage}{" "}
					of {metadata.totalItems}
				</p>
			) : (
				<p>No results found.</p>
			)}

			{showFilterControls && tagsParam?.length ? (
				<div className="flex gap-2">
					Tags:
					<ul className="flex flex-col gap-2">
						{tagsParam.map((tag) => {
							return (
								<li className="flex gap-3 items-center" key={tag}>
									<Link
										to="/tags/$slug"
										params={{ slug: tag }}
										className="hover:underline underline-offset-4"
									>
										#{tag}
									</Link>
									<button
										onClick={() => handleClick(tag)}
										type="button"
										className="cursor-pointer"
									>
										<X className="stroke-4 size-4 stroke-gold-dark dark:stroke-gold" />
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			) : null}
		</div>
	);
}
