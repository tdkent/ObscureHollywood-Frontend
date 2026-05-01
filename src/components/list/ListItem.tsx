import { DateTime } from "luxon";
import { Link } from "react-router";
import Thumbnail from "@/components/list/Thumbnail";
import type { Feature } from "@/types/feature.interface";
import type { Film } from "@/types/film.interface";
import type { PartialListItem } from "@/types/paginated-response.interface";
import type { Person } from "@/types/person.interface";
import type { Search } from "@/types/search.interface";
import type { Entity } from "@/types/ui.interface";

interface Props {
	entity: Entity;
	item: PartialListItem;
}

export default function ListItem({ entity, item }: Props) {
	let subtitle = "";
	let link = item.slug;

	switch (entity) {
		case "features": {
			const feature = item as Feature;
			subtitle = feature.subtitle;
			break;
		}

		case "films": {
			const film = item as Film;
			subtitle = `${film.releaseYear}`;
			break;
		}

		case "people": {
			const { birthDate, deathDate } = item as Person;
			if (!birthDate) {
				subtitle = "";
				break;
			}

			const birthYear = DateTime.fromISO(birthDate).year;

			if (!deathDate) {
				subtitle = `Born ${birthYear}`;
				break;
			}

			const deathYear = DateTime.fromISO(deathDate).year;
			subtitle = `${birthYear} - ${deathYear}`;
			break;
		}

		case "search": {
			const { category } = item as Search;
			subtitle = `${category.slice(0, 1).toUpperCase()}${category.slice(1)}`;
			link = `/${category === "person" ? "people" : `${category}s`}/${item.slug}`;
			break;
		}

		default:
			break;
	}

	const showListDetails = entity !== "studios";

	return (
		<li className={`${showListDetails ? "min-h-20 py-2" : "py-5"}`}>
			<Link to={link}>
				<div className="flex justify-between gap-1">
					<div className="flex flex-col gap-1 grow">
						<h2 className="text-base font-semibold">{item.name}</h2>
						{showListDetails && <span className="text-sm">{subtitle}</span>}
					</div>
					{showListDetails && <Thumbnail />}
				</div>
			</Link>
		</li>
	);
}
