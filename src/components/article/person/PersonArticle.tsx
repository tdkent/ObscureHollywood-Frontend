import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import ArticleHeader from "@/components/article/ArticleHeader";
import DescriptionList from "@/components/shared/DescriptionList";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import { getFormattedDateString } from "@/lib/utils/formatPersonDates";
import type { PersonWithRelations } from "@/types/person.interface";
import type { DlMetadata, Entity } from "@/types/ui.interface";

/** Render header and parsed HTML of Person article. */
export default function PersonArticle() {
	const { slug } = useParams();
	const { pathname } = useLocation();

	const entity: Entity = "people";

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	const {
		age,
		birthDate,
		birthPlace,
		deathDate,
		deathPlace,
		name,
		slug: personSlug,
	} = data as PersonWithRelations;

	const metadata: DlMetadata[] = [
		{
			title: birthDate ? "Born" : null,
			description: {
				label: birthDate ? getFormattedDateString(birthDate) : null,
			},
		},
		{
			title: birthPlace ? "Born In" : null,
			description: {
				label: birthPlace,
			},
		},
		{
			title: deathDate ? "Died" : null,
			description: {
				label: deathDate
					? `${getFormattedDateString(deathDate)}${age ? ` (aged ${age})` : ""}`
					: null,
			},
		},
		{
			title: deathPlace ? "Died In" : null,
			description: {
				label: deathPlace,
			},
		},
	];

	// Filter out metadata with null entries.
	const filteredMetadata = metadata.filter((data) => data.title);

	return (
		<>
			<ArticleHeader name={name} slug={personSlug}>
				<DescriptionList metadata={filteredMetadata} />
			</ArticleHeader>
		</>
	);
}
