import { useParams } from "react-router";

export default function PersonDetailsPage() {
	const params = useParams();
	return (
		<div>
			<h1>{params.slug}</h1>
		</div>
	);
}
