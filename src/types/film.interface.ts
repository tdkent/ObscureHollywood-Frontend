import type { ArticleWithRelations } from "@/types/article.interface";
import type {
	FilmTag,
	PersonFilmWithPerson,
} from "@/types/join-table.interface";
import type { Studio } from "@/types/studio.interface";

export interface Film {
	id: number;
	slug: string;
	name: string;
	releaseYear: number;
}
export interface FilmWithRelations extends Film {
	article: ArticleWithRelations;
	studio: Studio;
	personFilms: PersonFilmWithPerson[];
	filmTags: FilmTag[];
}
