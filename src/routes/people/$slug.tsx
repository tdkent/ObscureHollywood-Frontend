import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import PersonArticle from "@/components/article/person/PersonArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import type { PersonWithRelations } from "@/types/person.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";
import { getPersonLifespanString } from "@/util/formatPersonDates";

export const Route = createFileRoute("/people/$slug")({
	loader: async ({ context, params }) => {
		const person = (await context.queryClient.ensureQueryData(
			articleQueryOptions({
				route: "people",
				slug: params.slug,
			}),
		)) as PersonWithRelations;

		const lifespanStr = getPersonLifespanString({
			birthDate: person.birthDate,
			deathDate: person.deathDate,
		});

		const roles = person.personFilms
			? Array.from(new Set(person.personFilms.map((pf) => pf.role)))
			: null;

		const rolesStr = roles
			? roles
					.sort()
					.map((role) => `${role.slice(0, 1).toUpperCase()}${role.slice(1)}`)
					.join(", ")
			: null;

		return { person, lifespanStr, rolesStr };
	},
	component: RouteComponent,
	head: ({ loaderData }) => ({
		meta: [
			{
				title: loaderData
					? `${loaderData.person.name} ${loaderData.lifespanStr ? `(${loaderData.lifespanStr})` : ""} ${loaderData.rolesStr ? `Film ${loaderData.rolesStr}` : ""} - Obscure Hollywood`
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
