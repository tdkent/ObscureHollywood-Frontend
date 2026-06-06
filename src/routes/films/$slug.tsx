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

		return { film };
	},
	component: RouteComponent,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData
					? `${loaderData.film.name} - Obscure Hollywood`
					: "Not Found - Obscure Hollywood",
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
