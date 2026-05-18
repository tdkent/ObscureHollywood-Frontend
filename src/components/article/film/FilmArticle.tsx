import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import ArticleHeader from "@/components/article/ArticleHeader";
import ParsedHtml from "@/components/article/ParsedHtml";
import RelatedArticles from "@/components/article/RelatedArticles";
import DescriptionList from "@/components/shared/DescriptionList";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { FilmWithRelations } from "@/types/film.interface";
import type { Entity, FilteredDlMetadata } from "@/types/ui.interface";

export default function FilmArticle() {
	const { slug } = useParams();
	const { pathname } = useLocation();

	const entity: Entity = "films";

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading hasDescList isFullArticle variant="article" />;
	if (error) return <DisplayError />;

	const {
		article: { htmlContent, incomingRelations },
		filmTags,
		name,
		personFilms,
		releaseYear,
		slug: filmSlug,
		studio,
	} = data as FilmWithRelations;

	// Filter and join in case of multiple directors
	const directors = personFilms
		.filter((person) => person.role === "director")
		.map((person) => {
			return {
				label: person.person.name,
				href: `/people/${person.person.slug}`,
			};
		});

	const writers = personFilms
		.filter((person) => person.role === "writer")
		.map((person) => {
			return {
				label: person.person.name,
				href: `/people/${person.person.slug}`,
			};
		});

	const actors = personFilms
		.filter((person) => person.role === "actor")
		.sort((a, b) => a.castPosition - b.castPosition)
		.map((person) => {
			return {
				label: person.person.name,
				href: `/people/${person.person.slug}`,
			};
		});

	const tags = filmTags.map((ft) => {
		return {
			label: ft.tag.name,
			href: `/tags/${ft.tag.slug}`,
		};
	});

	const metadata: FilteredDlMetadata[] = [
		{
			title: "Release Year",
			description: {
				label: releaseYear,
			},
		},
		{
			title: "Studio",
			description: {
				label: studio.name,
				href: `/studios/${studio.slug}`,
			},
		},
		{
			title: `Director${directors.length > 1 ? "s" : ""}`,
			description: directors,
		},
		{
			title: `Screenwriter${writers.length > 1 ? "s" : ""}`,
			description: writers,
		},
		{
			title: "Cast",
			description: actors,
		},
		{
			title: "Tags",
			description: tags,
		},
	];

	return (
		<>
			<ArticleHeader
				name={name}
				showImage
				slug={filmSlug}
				subtitle={releaseYear}
			>
				{metadata.length ? <DescriptionList metadata={metadata} /> : null}
			</ArticleHeader>
			<ParsedHtml htmlContent={htmlContent} />
			{incomingRelations?.length ? (
				<RelatedArticles relatedArticles={incomingRelations} />
			) : null}
		</>
	);
}
