import type { Entity } from "@/lib/paginatedSortOptions";
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
			<>
				<h2>
					{listItem.firstName} {listItem.lastName}
				</h2>
				<span></span>
			</>
		);
	}

	return;
}
