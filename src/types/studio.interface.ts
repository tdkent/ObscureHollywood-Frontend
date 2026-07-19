import type { Film } from "@/types/film.interface";

export interface Studio {
	id: number;
	slug: string;
	name: string;
	yearFounded: number | null;
	yearClosed: number | null;
	country: string | null;
	otherNames: string[] | null;
	description: string | null;
}

export interface StudioWithRelations extends Studio {
	films: Film[];
	incomingRelations: {
		id: number;
		studio: Studio;
	}[];
}
