import Paginated from "@/components/list/Paginated";
import type { Entity } from "@/types/ui.interface";

//? All search params must be provided from URL but may be undefined
interface Props {
	limit: string | undefined;
	page: string | undefined;
	orderBy: string | undefined;
	q?: string;
	route: Entity;
}

export default function ListPage({ limit, page, orderBy, q, route }: Props) {
	return (
		<div className="page-margins bg-content">
			<div className="my-4 px-6 sm:px-12">
				{route === "search" ? (
					<>
						<h1 className="text-3xl md:text-4xl">Search Results</h1>
						<p className="my-4 text-lg sm:text-xl">"{q}"</p>
					</>
				) : (
					<h1 className="text-3xl md:text-4xl">
						{`${route.slice(0, 1).toUpperCase()}${route.slice(1).toLowerCase()}`}
					</h1>
				)}
			</div>
			<Paginated
				limit={limit}
				page={page}
				orderBy={orderBy}
				q={q}
				route={route}
				showFilterControls={route === "films"}
			/>
		</div>
	);
}
