import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import StudioArticle from "@/components/article/studio/StudioArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import SlugPageError from "@/components/shared/SlugPageError";
import { DOMAIN_URL } from "@/constants/api.constants";
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

		const canonicalUrl = `${DOMAIN_URL}studios/${params.slug}`;

		return { studio, title, description, canonicalUrl };
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
				content: loaderData?.studio.name,
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
			<Suspense fallback={<Loading variant="article" />}>
				<StudioArticle />
			</Suspense>
		</DetailPage>
	);
}
