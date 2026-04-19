import type { Article } from "@/types/article.interface";

export interface Film {
	id: number;
	slug: string;
	name: string;
	releaseYear: number;
	article: Article;
}

export type FilmLisItem = Pick<Film, "id" | "name" | "slug" | "releaseYear">;
