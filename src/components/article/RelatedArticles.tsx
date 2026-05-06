import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router";
import type { ArticleWithRelations } from "@/types/article.interface";

interface Props {
	relatedArticles: ArticleWithRelations["incomingRelations"];
}

export default function RelatedArticles({ relatedArticles }: Props) {
	const { pathname } = useLocation();
	const entity = pathname.split("/")[1];

	return (
		<section className="border-t py-4 flex flex-col gap-6">
			<h3>Related Articles</h3>
			<ul className="flex flex-col gap-6 font-light text-sm">
				{relatedArticles.map((relation) => {
					const {
						id,
						article: { name, slug },
					} = relation;
					return (
						<li className="flex justify-between items-center" key={id}>
							<Link to={`/${entity}/${slug}`}>{name}</Link>
							<ChevronRight className="stroke-1 size-4" />
						</li>
					);
				})}
			</ul>
		</section>
	);
}
