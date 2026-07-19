import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams, useSearch } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import Paginated from "@/components/list/Paginated";
import DescriptionList from "@/components/shared/DescriptionList";
import type { UrlSearchParams } from "@/types/api.interface";
import type { StudioWithRelations } from "@/types/studio.interface";
import {
	dlText,
	type FilteredDlMetadata,
	type UnfilteredDlMetadata,
} from "@/types/ui.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";
import { getStudioAge } from "@/util/formatDates";

export default function StudioArticle() {
	const { slug } = useParams({ from: "/studios/$slug" });

	const { orderBy, page }: UrlSearchParams = useSearch({
		from: "/studios/$slug",
	});

	const studioQuery = useSuspenseQuery(
		articleQueryOptions({
			route: "studios",
			slug,
		}),
	);

	const {
		name,
		slug: studioSlug,
		yearFounded,
		yearClosed,
		country,
		otherNames,
		description: comments,
		incomingRelations,
	} = studioQuery.data as StudioWithRelations;

	const names = otherNames?.length
		? otherNames.map((name) => {
				return {
					label: name,
				};
			})
		: null;

	const age = getStudioAge(yearFounded, yearClosed);

	const relatedStudios = incomingRelations.map(({ studio }) => {
		return {
			label: studio.name,
			href: `/studios/${studio.slug}`,
		};
	});

	const metadata: UnfilteredDlMetadata[] = [
		{
			title: "Founded",
			description: {
				label:
					yearFounded && !yearClosed
						? `${yearFounded} (${age} years)`
						: yearFounded && yearClosed
							? yearFounded
							: "Unknown",
			},
		},
		{
			title: yearClosed || !yearFounded ? "Closed" : null,
			description: {
				label: yearClosed ? `${yearClosed} (${age} years)` : "Unknown",
			},
		},
		{
			title: "Country",
			description: {
				label: country ?? dlText.UNKNOWN,
			},
		},
		{
			title: otherNames?.length ? "Other Names" : null,
			description: names,
		},
		{
			title: comments ? "Comments" : null,
			description: {
				label: comments ? comments.replaceAll(`\\"`, `"`) : null,
			},
		},
		{
			title: relatedStudios.length ? "Related Studios" : null,
			description: relatedStudios,
		},
	];

	// Filter out metadata with null entries.
	const filteredMetadata = metadata.filter((data) => data.title);

	return (
		<>
			<ArticleHeader name={name} slug={studioSlug}>
				<DescriptionList metadata={filteredMetadata as FilteredDlMetadata[]} />
			</ArticleHeader>
			<Paginated
				orderBy={orderBy}
				page={page}
				queryUrl={`studios/${slug}/films`}
				route="films"
			/>
		</>
	);
}
