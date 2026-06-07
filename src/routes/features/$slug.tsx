import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import FeatureArticle from "@/components/article/features/FeatureArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import SlugPageError from "@/components/shared/SlugPageError";
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
	errorComponent: ({ error }) => <SlugPageError error={error} />,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData
					? loaderData.title
					: "Feature Article - Obscure Hollywood",
			},
			{
				name: "description",
				content: loaderData ? loaderData.description : "Feature article",
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
