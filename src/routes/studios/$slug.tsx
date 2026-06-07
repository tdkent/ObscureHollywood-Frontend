import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import StudioArticle from "@/components/article/studio/StudioArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import SlugPageError from "@/components/shared/SlugPageError";
import type { StudioWithRelations } from "@/types/studio.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export const Route = createFileRoute("/studios/$slug")({
	loader: async ({ context, params }) => {
		const studio = (await context.queryClient.ensureQueryData(
			articleQueryOptions({
				route: "studios",
				slug: params.slug,
			}),
		)) as StudioWithRelations;

		const title = `${studio.name} Film Studio - Obscure Hollywood`;
		const description = `Overview and partial filmography of film studio ${studio.name}.`;

		return { studio, title, description };
	},
	component: RouteComponent,
	errorComponent: ({ error }) => <SlugPageError error={error} />,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData
					? loaderData.title
					: "Studio Article - Obscure Hollywood",
			},
			{
				name: "description",
				content: loaderData ? loaderData.description : "Studio article",
			},
		],
	}),
});

function RouteComponent() {
	return (
		<DetailPage>
			<Suspense fallback={<Loading variant="article" />}>
				<StudioArticle />
			</Suspense>
		</DetailPage>
	);
}
