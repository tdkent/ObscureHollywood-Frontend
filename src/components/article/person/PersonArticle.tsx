import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import ParsedHtml from "@/components/article/ParsedHtml";
import RelatedArticles from "@/components/article/RelatedArticles";
import DescriptionList from "@/components/shared/DescriptionList";
import type { Film } from "@/types/film.interface";
import type { PersonWithRelations } from "@/types/person.interface";
import { dlText, type FilteredDlMetadata } from "@/types/ui.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";
import { getFormattedDateString } from "@/util/formatPersonDates";

/** Render header and parsed HTML of Person article. */
export default function PersonArticle() {
	const { slug } = useParams({ from: "/people/$slug" });

	const personQuery = useSuspenseQuery(
		articleQueryOptions({
			route: "people",
			slug,
		}),
	);

	const {
		age,
		article,
		birthDate,
		birthPlace,
		deathDate,
		deathPlace,
		gender,
		name,
		personFilms,
		slug: personSlug,
	} = personQuery.data as PersonWithRelations;

	const roles = personFilms
		? Array.from(new Set(personFilms.map((pf) => pf.role)))
		: null;

	const subtitle = roles
		? roles
				.sort()
				.map((role) => `${role.slice(0, 1).toUpperCase()}${role.slice(1)}`)
				.join(", ")
		: null;

	const filteredFilms: Film[] = [];

	if (personFilms) {
		for (const { film } of personFilms) {
			const hasFilm = filteredFilms.find((f) => f.id === film.id);
			if (!hasFilm) {
				filteredFilms.push(film);
			}
		}
	}

	const films = filteredFilms.length
		? filteredFilms
				.sort((a, b) => a.releaseYear - b.releaseYear)
				.map((film) => {
					return {
						label: film.name,
						href: `/films/${film.slug}`,
					};
				})
		: null;

	//? Note: some/all person db fields may be null
	const metadata: FilteredDlMetadata[] = [
		{
			title: "Born",
			description: {
				label: birthDate ? getFormattedDateString(birthDate) : dlText.UNKNOWN,
			},
		},
		{
			title: "Born In",
			description: {
				label: birthPlace ?? dlText.UNKNOWN,
			},
		},
		{
			title: "Died",
			description: {
				label: deathDate
					? `${getFormattedDateString(deathDate)}${age ? ` (aged ${age})` : ""}`
					: dlText.UNKNOWN,
			},
		},
		{
			title: "Died In",
			description: {
				label: deathPlace ?? dlText.UNKNOWN,
			},
		},
		{
			title: "Partial Filmography",
			description: films ?? { label: dlText.NA },
		},
	];

	// Filter out metadata with null entries.
	const filteredMetadata = metadata.filter((data) => data.title);

	return (
		<>
			<ArticleHeader
				name={name}
				personGender={gender}
				showImage
				slug={personSlug}
				subtitle={subtitle}
			>
				<DescriptionList metadata={filteredMetadata as FilteredDlMetadata[]} />
			</ArticleHeader>
			{article?.htmlContent && <ParsedHtml htmlContent={article.htmlContent} />}
			{article?.incomingRelations?.length ? (
				<RelatedArticles relatedArticles={article.incomingRelations} />
			) : null}
		</>
	);
}
