import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import PersonArticle from "@/components/article/person/PersonArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import type { PersonWithRelations } from "@/types/person.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export const Route = createFileRoute("/people/$slug")({
	loader: async ({ context, params }) => {
		const person = (await context.queryClient.ensureQueryData(
			articleQueryOptions({
				route: "people",
				slug: params.slug,
			}),
		)) as PersonWithRelations;

		return { person };
	},
	component: RouteComponent,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData
					? `${loaderData.person.name} - Obscure Hollywood`
					: "Not Found - Obscure Hollywood",
			},
		],
	}),
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
