import type { ArticleWithRelations } from "@/types/article.interface";
import type { PersonFilmWithFilm } from "@/types/join-table.interface";

export interface Person {
	id: number;
	slug: string;
	firstName: string;
	lastName: string;
	birthDate: string;
	deathDate: string;
	birthPlace: string;
	deathPlace: string;
}

export interface PersonWithRelations extends Person {
	article: ArticleWithRelations;
	personFilms: PersonFilmWithFilm[];
}
