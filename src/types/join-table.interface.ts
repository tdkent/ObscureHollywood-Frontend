import type { Film } from "@/types/film.interface";
import type { Person } from "@/types/person.interface";
import type { Tag } from "@/types/tag.interface";

interface FilmTag {
	id: number;
}

export interface FilmTagWithTag extends FilmTag {
	tag: Tag;
}

export interface FilmTagWithFilm extends FilmTag {
	film: Film;
}

interface PersonFilm {
	id: number;
	role: "actor" | "director" | "writer";
	castPosition: 2;
}

export interface PersonFilmWithFilm extends PersonFilm {
	film: Film;
}

export interface PersonFilmWithPerson extends PersonFilm {
	person: Person;
}
