import type { ArticleWithRelations } from "@/types/article.interface";
import type { PersonFilm } from "@/types/person.interface";
import type { Studio } from "@/types/studio.interface";
import type { Tag } from "@/types/tag.interface";

export interface Film {
	id: number;
	slug: string;
	name: string;
	releaseYear: number;
}

interface FilmTag {
	id: number;
	tag: Tag;
}

export interface FilmWithRelations extends Film {
	article: ArticleWithRelations;
	studio: Studio;
	personFilms: PersonFilm[];
	filmTags: FilmTag[];
}
