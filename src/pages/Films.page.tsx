import { useLocation } from "react-router";
import Paginated from "@/components/list/Paginated";

export default function FilmsPage() {
	const { pathname, search } = useLocation();

	const route = `${pathname}${search}`;

	return (
		<div>
			<h2>Films</h2>
			<Paginated route={route} />
		</div>
	);
}
