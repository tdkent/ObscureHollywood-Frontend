import type { FilmTagWithFilm } from "@/types/join-table.interface";

export interface Tag {
	id: number;
	name: string;
	slug: string;
	type: string;
}

export interface TagWithRelations extends Tag {
	filmTags: FilmTagWithFilm[];
}
