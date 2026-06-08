import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import FeatureArticle from "@/components/article/features/FeatureArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import SlugPageError from "@/components/shared/SlugPageError";
import { DOMAIN_URL } from "@/constants/api.constants";
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
		const canonicalUrl = `${DOMAIN_URL}features/${params.slug}`;

		return { feature, title, description, canonicalUrl };
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
				content: loaderData ? loaderData.description : "",
			},
			// Open Graph
			{ property: "og:site_name", content: "Obscure Hollywood" },
			{ property: "og:type", content: "article" },
			{
				property: "og:title",
				content: loaderData?.feature.name,
			},
			{
				property: "og:description",
				content: loaderData?.description,
			},
			{ property: "og:url", content: loaderData?.canonicalUrl },
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
