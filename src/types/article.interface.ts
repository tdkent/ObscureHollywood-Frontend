export interface Article {
	id: number;
	name: string;
	slug: string;
	category: "feature" | "film" | "person";
	htmlContent: string;
}

export interface ArticleWithRelations extends Article {
	incomingRelations: Article[];
}
