import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";
import PersonArticle from "@/components/article/person/PersonArticle";
import DetailPage from "@/components/layout/containers/DetailPage";
import Loading from "@/components/shared/Loading";
import SlugPageError from "@/components/shared/SlugPageError";
import { DOMAIN_URL } from "@/constants/api.constants";
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

		const title = `${person.name} ${lifespanStr ? `(${lifespanStr})` : ""} ${rolesStr ? `Film ${rolesStr}` : ""} - Obscure Hollywood`;

		const description = `${person.article ? "Biography, career overview, and discussion" : "Overview"} of ${rolesStr ? `film ${rolesStr.toLowerCase()}` : ""} ${person.name}${lifespanStr ? ` (${lifespanStr})` : ""}.`;

		const canonicalUrl = `${DOMAIN_URL}people/${params.slug}`;

		return { person, title, description, canonicalUrl };
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
				content: loaderData?.person.name,
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
			<Suspense
				fallback={<Loading hasDescList isFullArticle variant="article" />}
			>
				<PersonArticle />
			</Suspense>
		</DetailPage>
	);
}
