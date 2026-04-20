export interface PartialListItem {
	id: number;
	slug: string;
}

export interface PaginatedResponse {
	data: PartialListItem[];
	meta: {
		currentPage: number;
		firstItemOnPage: number;
		itemsPerPage: number;
		lastItemOnPage: number;
		totalItems: number;
		totalPages: number;
	};
	links: {
		first: string;
		last: string;
		current: string;
		next: string;
		previous: string;
	};
}
