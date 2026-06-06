import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import StudioArticle from "@/components/article/studio/StudioArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
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
			<Suspense fallback={<Loading variant="article" />}>
				<StudioArticle />
			</Suspense>
		</DetailPage>
	);
}
