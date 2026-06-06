import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import FeatureArticle from "@/components/article/features/FeatureArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import type { FeatureWithRelations } from "@/types/feature.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export const Route = createFileRoute("/features/$slug")({
	loader: async ({ context, params }) => {
		const feature = (await context.queryClient.ensureQueryData(
			articleQueryOptions({
				route: "features",
				slug: params.slug,
			}),
		)) as FeatureWithRelations;

		const title = `${feature.name} - Obscure Hollywood`;
		const description = `In-depth feature article about ${feature.name}, ${feature.subtitle}.`;

		return { feature, title, description };
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
			<Suspense fallback={<Loading isFullArticle variant="article" />}>
				<FeatureArticle />
			</Suspense>
		</DetailPage>
	);
}
