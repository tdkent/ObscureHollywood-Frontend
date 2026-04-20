import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import FilmDetails from "@/components/article/film/FilmDetails";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { FilmWithRelations } from "@/types/film.interface";
import type { Entity } from "@/types/ui.interface";

export default function FilmArticle() {
	const { slug } = useParams();
	const { pathname } = useLocation();

	const entity: Entity = "films";

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	return (
		<div>
			<FilmDetails film={data as FilmWithRelations} />
		</div>
	);
}
