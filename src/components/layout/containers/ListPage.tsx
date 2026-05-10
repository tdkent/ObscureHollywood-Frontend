import { useLocation, useSearchParams } from "react-router";
import Paginated from "@/components/list/Paginated";
import type { Entity } from "@/types/ui.interface";

export default function ListPage() {
	const { pathname } = useLocation();
	const [searchParams] = useSearchParams();

	const route = pathname.split("/")[1] as Entity;

	const isSearch = route === "search";
	const showFilterControls = route === "films";

	const searchParam = searchParams.get("q");
	const headingText = `${route.slice(0, 1).toUpperCase()}${route.slice(1).toLowerCase()}`;

	return (
		<div className="page-margins">
			{isSearch ? (
				<>
					<h1>Search Results</h1>
					<p className="my-4 text-lg">"{searchParam}"</p>
				</>
			) : (
				<h1>{headingText}</h1>
			)}
			<Paginated showFilterControls={showFilterControls} />
		</div>
	);
}
