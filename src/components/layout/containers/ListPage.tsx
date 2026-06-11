import Paginated from "@/components/list/Paginated";
import type { Entity } from "@/types/ui.interface";

//? All search params must be provided from URL but may be undefined
interface Props {
	page: string | undefined;
	orderBy: string | undefined;
	searchParam?: string;
	route: Entity;
	tags?: string[];
}

export default function ListPage({
	page,
	orderBy,
	searchParam,
	route,
	tags,
}: Props) {
	return (
		<div className="page-margins bg-content">
			<div className="my-4 px-6 sm:px-12">
				{route === "search" ? (
					<>
						<h1 className="text-3xl md:text-4xl">Search Results</h1>
						<p className="my-4 text-lg sm:text-xl">"{searchParam}"</p>
					</>
				) : (
					<h1 className="text-3xl md:text-4xl">
						{`${route.slice(0, 1).toUpperCase()}${route.slice(1).toLowerCase()}`}
					</h1>
				)}
			</div>
			<Paginated
				page={page}
				orderBy={orderBy}
				searchParam={searchParam}
				route={route}
				showFilterControls={route === "films"}
				tagsParam={tags}
			/>
		</div>
	);
}
