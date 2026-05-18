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
		<div className="page-margins bg-content">
			<div className="px-6 sm:px-12 lg:px-24">
				{isSearch ? (
					<>
						<h1 className="text-secondary-text text-4xl sm:text-5xl">
							Search Results
						</h1>
						<p className="my-4 text-lg sm:text-xl">"{searchParam}"</p>
					</>
				) : (
					<h1 className="text-secondary-text text-4xl sm:text-5xl">
						{headingText}
					</h1>
				)}
			</div>
			<Paginated showFilterControls={showFilterControls} />
		</div>
	);
}
