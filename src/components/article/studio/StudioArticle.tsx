import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import ArticleHeader from "@/components/article/ArticleHeader";
import Paginated from "@/components/list/Paginated";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { StudioWithRelations } from "@/types/studio.interface";
import type { Entity } from "@/types/ui.interface";

export default function StudioArticle() {
	const { slug } = useParams();
	const { pathname } = useLocation();

	const entity: Entity = "studios";

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading variant="article" />;
	if (error) return <DisplayError />;

	const { name, slug: studioSlug } = data as StudioWithRelations;

	return (
		<>
			<ArticleHeader name={name} slug={studioSlug} />
			<Paginated reqUrl={`/studios/${slug}/films`} routeEntity="films" />
		</>
	);
}
