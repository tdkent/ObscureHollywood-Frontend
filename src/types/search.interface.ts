export interface Search {
	id: number;
	category: "feature" | "film" | "person" | "studio";
	htmlContent: string;
	name: string;
	slug: string;
}
