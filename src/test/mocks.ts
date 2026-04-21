import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { BACKEND_URL } from "@/constants/api.constants";
import type { Feature, FeatureWithRelations } from "@/types/feature.interface";
import type { Film, FilmWithRelations } from "@/types/film.interface";
import type { PaginatedResponse } from "@/types/paginated-response.interface";
import type { Person, PersonWithRelations } from "@/types/person.interface";
import type { Studio, StudioWithRelations } from "@/types/studio.interface";
import type { TagWithRelations } from "@/types/tag.interface";

const mockedPaginationMetadata: Pick<PaginatedResponse, "links" | "meta"> = {
	links: {
		first: "",
		last: "",
		current: "",
		next: "",
		previous: "",
	},
	meta: {
		currentPage: 1,
		firstItemOnPage: 1,
		itemsPerPage: 10,
		lastItemOnPage: 10,
		totalItems: 50,
		totalPages: 5,
	},
};

export const mockedFeaturesData: Feature[] = [
	{
		id: 1,
		name: "American Silent Films",
		slug: "american-silent-films",
	},
	{
		id: 2,
		name: "American Silent Treasures",
		slug: "american-silent-treasures",
	},
	{
		id: 4,
		name: "Corriganville",
		slug: "corriganville",
	},
];

export const mockedFilmsData: Film[] = [
	{
		id: 116,
		slug: "the-300-spartans-1962",
		name: "The 300 Spartans",
		releaseYear: 1962,
	},
	{
		id: 117,
		slug: "the-americano-1916",
		name: "The Americano",
		releaseYear: 1916,
	},
	{
		id: 5,
		slug: "applause-1929",
		name: "Applause",
		releaseYear: 1929,
	},
];

export const mockedPeopleData: Person[] = [
	{
		id: 210,
		slug: "dorothy-arzner",
		firstName: "Dorothy",
		lastName: "Arzner",
		birthDate: null,
		deathDate: null,
		birthPlace: null,
		deathPlace: null,
	},
	{
		id: 604,
		slug: "lionel-barrymore",
		firstName: "Lionel",
		lastName: "Barrymore",
		birthDate: null,
		deathDate: null,
		birthPlace: null,
		deathPlace: null,
	},
	{
		id: 632,
		slug: "madge-bellamy",
		firstName: "Madge",
		lastName: "Bellamy",
		birthDate: null,
		deathDate: null,
		birthPlace: null,
		deathPlace: null,
	},
];

export const mockedStudioData: Studio[] = [
	{
		id: 1,
		slug: "20th-century-fox",
		name: "20th Century Fox",
	},
	{
		id: 2,
		slug: "allied-artists-pictures",
		name: "Allied Artists Pictures",
	},
	{
		id: 3,
		slug: "associated-producers",
		name: "Associated Producers",
	},
];

const mockedPaginatedFeaturesResponse: PaginatedResponse = {
	...mockedPaginationMetadata,
	data: mockedFeaturesData,
};

const mockedPaginatedFilmsResponse: PaginatedResponse = {
	...mockedPaginationMetadata,
	data: mockedFilmsData,
};

const mockedPaginatedPeopleResponse: PaginatedResponse = {
	...mockedPaginationMetadata,
	data: mockedPeopleData,
};

const mockedPaginatedStudioResponse: PaginatedResponse = {
	...mockedPaginationMetadata,
	data: mockedStudioData,
};

export const mockedFeatureArticleData: FeatureWithRelations = {
	id: 4,
	name: "Corriganville",
	slug: "corriganville",
	article: {
		id: 29,
		slug: "corriganville",
		category: "feature",
		htmlContent: "<article></article>",
		incomingRelations: [],
	},
};

export const mockedFilmArticleData: Pick<
	FilmWithRelations,
	"id" | "slug" | "name" | "releaseYear" | "article"
> = {
	id: 117,
	slug: "the-americano-1916",
	name: "The Americano",
	releaseYear: 1916,
	article: {
		id: 170,
		slug: "the-americano-1916",
		category: "film",
		htmlContent: "<article></article>",
		incomingRelations: [],
	},
};

export const mockedPersonArticleData: Omit<PersonWithRelations, "personFilms"> =
	{
		id: 36,
		slug: "alma-rubens",
		firstName: "Alma",
		lastName: "Rubens",
		birthDate: null,
		deathDate: null,
		birthPlace: null,
		deathPlace: null,
		article: {
			id: 6,
			slug: "alma-rubens",
			category: "person",
			htmlContent: "<article></article>",
			incomingRelations: [],
		},
	};

export const mockedStudioArticleData: StudioWithRelations = {
	id: 25,
	slug: "paramount-pictures",
	name: "Paramount Pictures",
	films: [
		{
			id: 5,
			slug: "applause-1929",
			name: "Applause",
			releaseYear: 1929,
		},
	],
};

export const mockedTagArticleData: TagWithRelations = {
	id: 4,
	slug: "decade-1930s",
	name: "1930s",
	type: "decade",
	filmTags: [
		{
			id: 9,
			film: {
				id: 3,
				slug: "a-house-divided-1930",
				name: "A House Divided",
				releaseYear: 1930,
			},
		},
	],
};

export const handlers = [
	http.get(`${BACKEND_URL}/features`, () => {
		return HttpResponse.json(mockedPaginatedFeaturesResponse);
	}),
	http.get(`${BACKEND_URL}/features/corriganville`, () => {
		return HttpResponse.json(mockedFeatureArticleData);
	}),
	http.get(`${BACKEND_URL}/films`, () => {
		return HttpResponse.json(mockedPaginatedFilmsResponse);
	}),
	http.get(`${BACKEND_URL}/films/the-americano-1916`, () => {
		return HttpResponse.json(mockedFilmArticleData);
	}),
	http.get(`${BACKEND_URL}/people`, () => {
		return HttpResponse.json(mockedPaginatedPeopleResponse);
	}),
	http.get(`${BACKEND_URL}/people/alma-rubens`, () => {
		return HttpResponse.json(mockedPersonArticleData);
	}),
	http.get(`${BACKEND_URL}/studios`, () => {
		return HttpResponse.json(mockedPaginatedStudioResponse);
	}),
	http.get(`${BACKEND_URL}/studios/paramount-pictures`, () => {
		return HttpResponse.json(mockedStudioArticleData);
	}),
	http.get(`${BACKEND_URL}/tags/decade-1930s`, () => {
		return HttpResponse.json(mockedTagArticleData);
	}),
];

export const server = setupServer(...handlers);
