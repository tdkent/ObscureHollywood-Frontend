import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import ArticleHeader from "@/components/article/ArticleHeader";
import ParsedHtml from "@/components/article/ParsedHtml";
import RelatedArticles from "@/components/article/RelatedArticles";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { FeatureWithRelations } from "@/types/feature.interface";
import type { Entity } from "@/types/ui.interface";

export default function FeatureArticle() {
	const { slug } = useParams();
	const { pathname } = useLocation();

	const entity: Entity = "features";

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	const {
		article: { htmlContent, incomingRelations },
		name,
		slug: featureSlug,
		subtitle,
	} = data as FeatureWithRelations;

	return (
		<>
			<ArticleHeader name={name} slug={featureSlug} subtitle={subtitle} />
			<ParsedHtml htmlContent={htmlContent} />
			{incomingRelations?.length ? (
				<RelatedArticles relatedArticles={incomingRelations} />
			) : null}
		</>
	);
}
