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

		return { studio };
	},
	component: RouteComponent,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData
					? `${loaderData.studio.name} Film Studio - Obscure Hollywood`
					: "Not Found - Obscure Hollywood",
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
