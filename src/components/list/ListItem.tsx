import type { Entity } from "@/lib/paginatedSortOptions";
import type { FilmListItem } from "@/types/film.interface";

interface Props {
	entity: Entity;
	item: { id: number };
}

export default function ListItem({ entity, item }: Props) {
	if (entity === "films") {
		const listItem = item as FilmListItem;
		return (
			<div>
				<h2>{listItem.name}</h2>
				<span>{listItem.releaseYear}</span>
			</div>
		);
	}

	return <li></li>;
}
