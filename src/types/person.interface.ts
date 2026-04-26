import type { ArticleWithRelations } from "@/types/article.interface";
import type { PersonFilmWithFilm } from "@/types/join-table.interface";

export interface Person {
	id: number;
	slug: string;
	firstName: string;
	lastName: string;
	name: string;
	birthDate: string | null;
	deathDate: string | null;
	birthPlace: string | null;
	deathPlace: string | null;
}

export interface PersonWithRelations extends Person {
	article: ArticleWithRelations;
	personFilms: PersonFilmWithFilm[];
}
