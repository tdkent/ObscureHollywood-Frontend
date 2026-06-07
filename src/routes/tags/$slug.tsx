import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import TagArticle from "@/components/article/tag/TagArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import SlugPageError from "@/components/shared/SlugPageError";
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
		const description = `Description and list films matching the tag ${tag.name}.`;

		return { tag, title, description };
	},
	component: RouteComponent,
	errorComponent: ({ error }) => <SlugPageError error={error} />,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData
					? loaderData.title
					: "Tag Article - Obscure Hollywood",
			},
			{
				name: "description",
				content: loaderData ? loaderData.description : "Tag article",
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
