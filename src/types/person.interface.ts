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

export interface PersonFilm {
	id: number;
	role: "actor" | "director" | "writer";
	castPosition: 2;
	person: Person;
}
