import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import ArticleHeader from "@/components/article/ArticleHeader";
import Paginated from "@/components/list/Paginated";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { TagWithRelations } from "@/types/tag.interface";
import type { Entity } from "@/types/ui.interface";

export default function TagArticle() {
	const { slug } = useParams();
	const { pathname } = useLocation();

	const entity: Entity = "tags";

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading variant="article" />;
	if (error) return <DisplayError error={error} />;

	const { description, name, slug: tagSlug, type } = data as TagWithRelations;

	const typeSubtitle = `${type.slice(0, 1).toUpperCase()}${type.slice(1)}`;

	return (
		<>
			<ArticleHeader name={name} slug={tagSlug} subtitle={typeSubtitle}>
				<p className="px-6">{description}</p>
			</ArticleHeader>
			<Paginated reqUrl={`/tags/${slug}/films`} routeEntity="films" />
		</>
	);
}
