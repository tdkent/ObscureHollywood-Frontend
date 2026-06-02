import { useSuspenseQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import ArticleHeader from "@/components/article/ArticleHeader";
import ParsedHtml from "@/components/article/ParsedHtml";
import RelatedArticles from "@/components/article/RelatedArticles";
import type { FeatureWithRelations } from "@/types/feature.interface";
import { articleQueryOptions } from "@/util/query/articleQueryOptions";

export default function FeatureArticle() {
	const { slug } = useParams({ from: "/features/$slug" });

	const featureQuery = useSuspenseQuery(
		articleQueryOptions({
			route: "features",
			slug,
		}),
	);

	const {
		article: { htmlContent, incomingRelations },
		name,
		slug: featureSlug,
		subtitle,
	} = featureQuery.data as FeatureWithRelations;

	return (
		<>
			<ArticleHeader
				name={name}
				showImage
				slug={featureSlug}
				subtitle={subtitle}
			/>
			<ParsedHtml htmlContent={htmlContent} />
			{incomingRelations?.length ? (
				<RelatedArticles relatedArticles={incomingRelations} />
			) : null}
		</>
	);
}
