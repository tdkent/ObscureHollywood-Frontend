import type { Film } from "@/types/film.interface";

export interface Studio {
	id: number;
	slug: string;
	name: string;
}

export interface StudioWithRelations extends Studio {
	films: Film[];
}
