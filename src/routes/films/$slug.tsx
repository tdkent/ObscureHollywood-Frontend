import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import FilmArticle from "@/components/article/film/FilmArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import SlugPageError from "@/components/shared/SlugPageError";
import { DOMAIN_URL, IMG_ASSETS_URL } from "@/constants/api.constants";
import type { FilmWithRelations } from "@/types/film.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export const Route = createFileRoute("/films/$slug")({
	loader: async ({ context, params }) => {
		const film = (await context.queryClient.ensureQueryData(
			articleQueryOptions({
				route: "films",
				slug: params.slug,
			}),
		)) as FilmWithRelations;

		const directorsStr = film.personFilms
			.filter((person) => person.role === "director")
			.map((person) => person.person.name)
			.join(", ");

		const actorsStr = film.personFilms
			.filter((person) => person.role === "actor")
			.sort((a, b) => a.castPosition - b.castPosition)
			.map((person) => person.person.name)
			.join(", ");

		const title = `${film.name} (${film.releaseYear}) Film Synopsis & Discussion - Obscure Hollywood`;

		const description = `Synopsis and discussion of the film ${film.name}, released in ${film.releaseYear} by ${film.studio.name}. The film stars ${actorsStr}, and is directed by ${directorsStr}.`;

		const imgUrl = `${IMG_ASSETS_URL}/${params.slug}@1024.jpeg`;

		const canonicalUrl = `${DOMAIN_URL}films/${params.slug}`;

		return { film, title, description, canonicalUrl, imgUrl };
	},
	component: RouteComponent,
	errorComponent: ({ error }) => <SlugPageError error={error} />,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData ? loaderData.title : "Obscure Hollywood",
			},
			{
				name: "description",
				content: loaderData?.description,
			},
			// Open Graph
			{ property: "og:site_name", content: "Obscure Hollywood" },
			{ property: "og:type", content: "article" },
			{
				property: "og:title",
				content: loaderData?.film.name,
			},
			{
				property: "og:description",
				content: loaderData?.description,
			},
			{ property: "og:url", content: loaderData?.canonicalUrl },
			{ property: "og:image", content: loaderData?.imgUrl },
			{ property: "og:image:type", content: "image/jpeg" },
			{ property: "og:image:width", content: "1024" },
			{ property: "og:image:height", content: "731" },
			//? Temp disable robots
			{ name: "robots", content: "noindex,nofollow" },
		],
		links: [
			{
				rel: "canonical",
				href: loaderData?.canonicalUrl,
			},
		],
	}),
});

function RouteComponent() {
	return (
		<DetailPage>
			<Suspense
				fallback={<Loading hasDescList isFullArticle variant="article" />}
			>
				<FilmArticle />
			</Suspense>
		</DetailPage>
	);
}
