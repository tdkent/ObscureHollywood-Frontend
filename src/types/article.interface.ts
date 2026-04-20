interface Article {
	id: number;
	slug: string;
	category: "feature" | "film" | "person";
	htmlContent: string;
}

export interface ArticleWithRelations extends Article {
	incomingRelations: Article[];
}
