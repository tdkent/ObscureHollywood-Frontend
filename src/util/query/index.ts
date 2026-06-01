import httpRequest from "@/util/httpRequest";

/** HOME */
export const sectionListItemQueryOptions = (
	route: "features" | "films" | "people",
) => ({
	queryKey: [route, "recent"],
	queryFn: () => httpRequest(`/${route}/recent`),
});
