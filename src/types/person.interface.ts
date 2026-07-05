import type { ArticleWithRelations } from "@/types/article.interface";
import type { PersonFilmWithFilm } from "@/types/join-table.interface";

export interface Person {
	age: number | null;
	birthDate: string | null;
	birthPlace: string | null;
	deathDate: string | null;
	deathPlace: string | null;
	firstName: string;
	gender: string | null;
	id: number;
	lastName: string;
	name: string;
	slug: string;
}

export interface PersonWithRelations extends Person {
	article: ArticleWithRelations | null;
	personFilms: PersonFilmWithFilm[] | null;
}
