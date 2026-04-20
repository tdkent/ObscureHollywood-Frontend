import { useParams } from "react-router";

export default function FilmDetailsPage() {
	const params = useParams();
	return (
		<div>
			<h1>{params.slug}</h1>
		</div>
	);
}
