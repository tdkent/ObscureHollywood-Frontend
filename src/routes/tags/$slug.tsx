import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import TagArticle from "@/components/article/tag/TagArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import SlugPageError from "@/components/shared/SlugPageError";
import { DOMAIN_URL } from "@/constants/api.constants";
import type { TagWithRelations } from "@/types/tag.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export const Route = createFileRoute("/tags/$slug")({
	loader: async ({ context, params }) => {
		const tag = (await context.queryClient.ensureQueryData(
			articleQueryOptions({
				route: "tags",
				slug: params.slug,
			}),
		)) as TagWithRelations;

		const title = `${tag.type.slice(0, 1).toUpperCase()}${tag.type.slice(1)}: ${tag.name} - Obscure Hollywood`;
		const description = `Description and list of films matching the tag ${tag.name}.`;

		const canonicalUrl = `${DOMAIN_URL}tags/${params.slug}`;

		return { tag, title, description, canonicalUrl };
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
				content: loaderData?.tag.name,
			},
			{
				property: "og:description",
				content: loaderData?.description,
			},
			{ property: "og:url", content: loaderData?.canonicalUrl },
			//? Temp disable robots
			{ name: "robots", content: "noindex,nofollow" },
		],
		links: [
			{
				rel: "canonical",
				href: loaderData?.canonicalUrl,
			},
		],
	}),
});

function RouteComponent() {
	return (
		<DetailPage>
			<Suspense fallback={<Loading variant="article" />}>
				<TagArticle />
			</Suspense>
		</DetailPage>
	);
}
