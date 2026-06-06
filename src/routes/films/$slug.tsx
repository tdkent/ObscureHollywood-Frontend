import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import FilmArticle from "@/components/article/film/FilmArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
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

		return { film, title, description };
	},
	component: RouteComponent,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData ? loaderData.title : "Not Found - Obscure Hollywood",
			},
			{
				name: "description",
				content: loaderData ? loaderData.description : "Page not found",
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
