import { queryOptions } from "@tanstack/react-query";
import type { Entity } from "@/types/ui.interface";
import httpRequest from "@/util/httpRequest";

interface Inputs {
	route: Entity;
	slug: string;
}

export function articleQueryOptions({ route, slug }: Inputs) {
	return queryOptions({
		queryKey: [route, slug],
		queryFn: () => httpRequest(`/${route}/${slug}`),
	});
}
