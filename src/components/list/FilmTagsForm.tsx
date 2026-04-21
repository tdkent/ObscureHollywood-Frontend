import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { Tag } from "@/types/tag.interface";

export default function FilmTagsForm() {
	const { data, error, isPending } = useQuery({
		queryKey: ["tags"],
		queryFn: () => httpRequest("/tags"),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	const tags = data as Tag[];

	const types: Tag["type"][] = ["decade", "genre", "production", "theme"];

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
											<input id={tag.slug} type="checkbox" value={tag.slug} />
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
