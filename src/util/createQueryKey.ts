import type { Entity } from "@/types/ui.interface";

interface Inputs {
	limitParam: number;
	pageParam: number;
	route: Entity;
	searchParam?: string;
	sortParam: string;
}

export function createQueryKey({
	limitParam,
	pageParam,
	route,
	searchParam,
	sortParam,
}: Inputs) {
	const queryKey = [route, pageParam, limitParam, sortParam];

	if (searchParam) queryKey.push(searchParam);

	return queryKey;
}
