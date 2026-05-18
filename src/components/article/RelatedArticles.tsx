// import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import type { ArticleWithRelations } from "@/types/article.interface";

interface Props {
	relatedArticles: ArticleWithRelations["incomingRelations"];
}

export default function RelatedArticles({ relatedArticles }: Props) {
	return (
		<section className="border-t flex flex-col gap-6 p-6 sm:p-12">
			<h3 className="text-2xl">Related Articles</h3>
			<ul className="link-list">
				{relatedArticles.map((relation) => {
					const {
						id,
						article: { category, name, slug },
					} = relation;
					return (
						<li key={id}>
							<Link
								className="content-link"
								to={`/${category === "person" ? "people" : `${category}s`}/${slug}`}
							>
								{name}
							</Link>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
