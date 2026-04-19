import type { Entity } from "@/lib/paginatedSortOptions";
import type { Feature } from "@/types/feature.interface";
import type { Film } from "@/types/film.interface";
import type { Person } from "@/types/person.interface";

interface Props {
	entity: Entity;
	item: { id: number };
}

export default function ListItem({ entity, item }: Props) {
	if (entity === "films") {
		const listItem = item as Film;
		return (
			<>
				<h2>{listItem.name}</h2>
				<span>{listItem.releaseYear}</span>
			</>
		);
	}

	if (entity === "people") {
		const listItem = item as Person;
		return (
			<h2>
				{listItem.firstName} {listItem.lastName}
			</h2>
		);
	}

	if (entity === "features") {
		const listItem = item as Feature;
		return <h2>{listItem.name}</h2>;
	}

	return;
}
