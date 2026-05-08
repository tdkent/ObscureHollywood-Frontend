import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import type { ArticleWithRelations } from "@/types/article.interface";

interface Props {
	relatedArticles: ArticleWithRelations["incomingRelations"];
}

export default function RelatedArticles({ relatedArticles }: Props) {
	return (
		<section className="border-t py-4 flex flex-col gap-6">
			<h3>Related Articles</h3>
			<ul className="link-list">
				{relatedArticles.map((relation) => {
					const {
						id,
						article: { category, name, slug },
					} = relation;
					return (
						<li key={id}>
							<Link
								to={`/${category === "person" ? "people" : `${category}s`}/${slug}`}
							>
								{name}
							</Link>
							<ChevronRight className="stroke-1 size-4" />
						</li>
					);
				})}
			</ul>
		</section>
	);
}
