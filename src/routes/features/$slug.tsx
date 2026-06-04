import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import FeatureArticle from "@/components/article/features/FeatureArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export const Route = createFileRoute("/features/$slug")({
	loader: async ({ context, params }) => {
		await context.queryClient.ensureQueryData(
			articleQueryOptions({
				route: "features",
				slug: params.slug,
			}),
		);
	},
	component: RouteComponent,
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
