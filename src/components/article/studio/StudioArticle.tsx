import { useQuery } from "@tanstack/react-query";
import { useParams, useSearch } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import Paginated from "@/components/list/Paginated";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import NotFound from "@/components/shared/NotFound";
import type { UrlSearchParams } from "@/types/api.interface";
import type { StudioWithRelations } from "@/types/studio.interface";
import httpRequest from "@/util/httpRequest";

export default function StudioArticle() {
	const { slug } = useParams({ from: "/studios/$slug" });

	const { limit, orderBy, page }: UrlSearchParams = useSearch({
		from: "/studios/$slug",
	});

	const { data, error, isPending } = useQuery({
		queryKey: ["studios", slug],
		queryFn: () => httpRequest(`/studios/${slug}`),
	});

	if (isPending) return <Loading variant="article" />;
	if (error) {
		if (error.message === "Resource not found") return <NotFound />;
		return <DisplayError />;
	}

	const { name, slug: studioSlug } = data as StudioWithRelations;

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
