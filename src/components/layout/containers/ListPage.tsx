import Paginated from "@/components/list/Paginated";
import type { Entity } from "@/types/ui.interface";

interface Props {
	route: Entity;
	searchString?: string;
}

export default function ListPage({ route, searchString }: Props) {
	return (
		<div className="page-margins bg-content">
			<div className="my-4 px-6 sm:px-12">
				{route === "search" ? (
					<>
						<h1 className="text-3xl md:text-4xl">Search Results</h1>
						<p className="my-4 text-lg sm:text-xl">"{searchString}"</p>
					</>
				) : (
					<h1 className="text-3xl md:text-4xl">
						{`${route.slice(0, 1).toUpperCase()}${route.slice(1).toLowerCase()}`}
					</h1>
				)}
			</div>
			<Paginated route={route} showFilterControls={route === "films"} />
		</div>
	);
}
