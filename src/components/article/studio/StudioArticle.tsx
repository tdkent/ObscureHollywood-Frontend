import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams, useSearch } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import Paginated from "@/components/list/Paginated";
import type { UrlSearchParams } from "@/types/api.interface";
import type { StudioWithRelations } from "@/types/studio.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export default function StudioArticle() {
	const { slug } = useParams({ from: "/studios/$slug" });

	const { orderBy, page }: UrlSearchParams = useSearch({
		from: "/studios/$slug",
	});

	const studioQuery = useSuspenseQuery(
		articleQueryOptions({
			route: "studios",
			slug,
		}),
	);

	const { name, slug: studioSlug } = studioQuery.data as StudioWithRelations;

	return (
		<>
			<ArticleHeader name={name} slug={studioSlug} />
			<Paginated
				limit={limit}
				orderBy={orderBy}
				page={page}
				queryUrl={`studios/${slug}/films`}
				route="films"
			/>
		</>
	);
}
