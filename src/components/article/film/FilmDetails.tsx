import { Link } from "react-router";
import type { FilmWithRelations } from "@/types/film.interface";

interface Props {
	film: FilmWithRelations;
}

export default function FilmDetails({ film }: Props) {
	return (
		<section>
			<h1>{film.name}</h1>
			<dl>
				<dt>Release Year</dt>
				<dd>{film.releaseYear}</dd>
				<dt>Studio</dt>
				<dd>
					<Link to={`/studios/${film.studio.slug}`}>{film.studio.name}</Link>
				</dd>
			</dl>
		</section>
	);
}
