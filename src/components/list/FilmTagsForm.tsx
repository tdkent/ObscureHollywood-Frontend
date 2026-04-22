import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { Tag } from "@/types/tag.interface";
import type { SortValue } from "@/types/ui.interface";

interface Props {
	limitParam: number;
	sortParam: SortValue;
	tagParams: string[];
}

export default function FilmTagsForm({
	limitParam,
	sortParam,
	tagParams,
}: Props) {
	const [_, setSearchParams] = useSearchParams();

	const { data, error, isPending } = useQuery({
		queryKey: ["tags"],
		queryFn: () => httpRequest("/tags"),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	const tags = data as Tag[];

	const types: Tag["type"][] = ["decade", "genre", "production", "theme"];

	function handleCheckFilter(
		e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
	) {
		const newTagSlug = e.currentTarget.value;

		// check if new slug is already in the search string
		// if so, remove it from the search string instead of adding it

		const getCurrTags = tagParams.length ? tagParams.join("&") : "";
		const currSearchParams = `?page=1&limit=${limitParam}&orderBy=${sortParam}`;
		setSearchParams(`${currSearchParams}&${getCurrTags}&tag=${newTagSlug}`);
	}

	return (
		<form>
			{types.map((type) => {
				const legend = `${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;
				return (
					<fieldset key={type}>
						<legend>{legend}</legend>
						<div>
							{tags
								.filter((tag) => tag.type === type)
								.map((tag) => {
									return (
										<div key={tag.id}>
											<input
												id={tag.slug}
												onChange={handleCheckFilter}
												type="checkbox"
												value={tag.slug}
											/>
											<label htmlFor={tag.slug}>{tag.name}</label>
										</div>
									);
								})}
						</div>
					</fieldset>
				);
			})}
		</form>
	);
}
