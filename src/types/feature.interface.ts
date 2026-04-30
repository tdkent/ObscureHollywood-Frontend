import type { ArticleWithRelations } from "@/types/article.interface";

export interface Feature {
	id: number;
	slug: string;
	name: string;
	subtitle: string;
}

export interface FeatureWithRelations extends Feature {
	article: ArticleWithRelations;
}
