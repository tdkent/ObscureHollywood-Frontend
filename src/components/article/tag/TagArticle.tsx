import { useQuery } from "@tanstack/react-query";
import { useParams, useSearch } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import Paginated from "@/components/list/Paginated";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import NotFound from "@/components/shared/NotFound";
import type { UrlSearchParams } from "@/types/api.interface";
import type { TagWithRelations } from "@/types/tag.interface";
import httpRequest from "@/util/httpRequest";

export default function TagArticle() {
	const { slug } = useParams({ from: "/tags/$slug" });

	const { limit, orderBy, page }: UrlSearchParams = useSearch({
		from: "/tags/$slug",
	});

	const { data, error, isPending } = useQuery({
		queryKey: ["tags", slug],
		queryFn: () => httpRequest(`/tags/${slug}`),
	});

	if (isPending) return <Loading variant="article" />;
	if (error) {
		if (error.message === "Resource not found") return <NotFound />;
		return <DisplayError />;
	}

	const { description, name, slug: tagSlug, type } = data as TagWithRelations;

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
