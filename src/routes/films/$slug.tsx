import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import FilmArticle from "@/components/article/film/FilmArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export const Route = createFileRoute("/films/$slug")({
	loader: async ({ context, params }) => {
		await context.queryClient.ensureQueryData(
			articleQueryOptions({
				route: "films",
				slug: params.slug,
			}),
		);
	},
	component: RouteComponent,
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
