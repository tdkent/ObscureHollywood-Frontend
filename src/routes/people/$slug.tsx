import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import PersonArticle from "@/components/article/person/PersonArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export const Route = createFileRoute("/people/$slug")({
	loader: async ({ context, params }) => {
		await context.queryClient.ensureQueryData(
			articleQueryOptions({
				route: "people",
				slug: params.slug,
			}),
		);
	},
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<DetailPage>
			<Suspense
				fallback={<Loading hasDescList isFullArticle variant="article" />}
			>
				<PersonArticle />
			</Suspense>
		</DetailPage>
	);
}
