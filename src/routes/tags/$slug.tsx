import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import TagArticle from "@/components/article/tag/TagArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
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

		return { tag };
	},
	component: RouteComponent,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData
					? `${loaderData.tag.type.slice(0, 1).toUpperCase()}${loaderData.tag.type.slice(1)}: ${loaderData.tag.name} - Obscure Hollywood`
					: "Not Found - Obscure Hollywood",
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
