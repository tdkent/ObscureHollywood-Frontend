import ParsedHtml from "@/components/article/ParsedHtml";
import RelatedArticles from "@/components/article/RelatedArticles";
import Image from "@/components/shared/Image";
import type { FeatureWithRelations } from "@/types/feature.interface";

interface Props {
	feature: FeatureWithRelations;
}

export default function FeatureDetails({ feature }: Props) {
	const {
		article: { htmlContent, incomingRelations },
		name,
		slug,
		subtitle,
	} = feature;

	return (
		<article className="flex flex-col gap-8 my-2">
			<header className="flex flex-col gap-4">
				<div>
					<h1 className="text-3xl font-normal">{name}</h1>
					<h2 className="text-xl">{subtitle}</h2>
				</div>
				<Image
					altText={name}
					fetchPriority="high"
					lazyLoading="eager"
					slug={slug}
				/>
			</header>
			<ParsedHtml htmlContent={htmlContent} />
			{incomingRelations?.length ? (
				<RelatedArticles relatedArticles={incomingRelations} />
			) : null}
		</article>
	);
}
