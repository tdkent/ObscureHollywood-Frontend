import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams, useSearch } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import Paginated from "@/components/list/Paginated";
import type { UrlSearchParams } from "@/types/api.interface";
import type { TagWithRelations } from "@/types/tag.interface";
import { articleQueryOptions } from "@/util/articleQueryOptions";

export default function TagArticle() {
	const { slug } = useParams({ from: "/tags/$slug" });

	const { limit, orderBy, page }: UrlSearchParams = useSearch({
		from: "/tags/$slug",
	});

	const tagQuery = useSuspenseQuery(
		articleQueryOptions({
			route: "tags",
			slug,
		}),
	);

	const {
		description,
		name,
		slug: tagSlug,
		type,
	} = tagQuery.data as TagWithRelations;

	const tagType = `${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;
	const subtitle = `#${slug}`;

	return (
		<>
			<ArticleHeader
				name={`${tagType}: ${name}`}
				slug={tagSlug}
				subtitle={subtitle}
			>
				<p className="px-6 sm:px-12 md:text-lg">{description}</p>
			</ArticleHeader>
			<Paginated
				limit={limit}
				orderBy={orderBy}
				page={page}
				queryUrl={`tags/${slug}/films`}
				route="films"
			/>
		</>
	);
}
