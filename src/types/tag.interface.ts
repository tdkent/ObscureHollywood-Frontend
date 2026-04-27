import type { FilmTagWithFilm } from "@/types/join-table.interface";

export interface Tag {
	id: number;
	description: string;
	name: string;
	slug: string;
	type: "decade" | "genre" | "production" | "theme";
}

export interface TagWithRelations extends Tag {
	filmTags: FilmTagWithFilm[];
}
