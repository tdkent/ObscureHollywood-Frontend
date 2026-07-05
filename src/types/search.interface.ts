export interface Search {
	id: number;
	category: "feature" | "film" | "person" | "studio";
	gender: string | null;
	htmlContent: string;
	name: string;
	slug: string;
}
