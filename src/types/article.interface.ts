export interface Article {
	id: number;
	slug: string;
	category: "feature" | "film" | "person";
	htmlContent: string;
	textContent: string;
}
