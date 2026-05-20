import { Link } from "react-router";
import Image from "@/components/shared/Image";
import { getPersonLifespanString } from "@/lib/utils/formatPersonDates";
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
	let link = `/${entity}/${item.slug}`;

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
			subtitle = getPersonLifespanString({ birthDate, deathDate });
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

	return (
		<li className="border-b first:border-t">
			<Link to={link}>
				<div className="flex justify-between gap-4 px-6 sm:px-12 sm:gap-6 py-2 sm:py-4">
					<Image
						altText={item.name}
						containerStyles="flex shrink-0 items-center justify-center border size-16 sm:size-20 md:size-22 lg:size-36"
						sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, (max-width: 1024px) 88px, 144px"
						slug={item.slug}
					/>
					<div className="flex flex-col gap-1 grow">
						<h2 className="w-fit text-base text-balance sm:text-xl xl:text-2xl">
							{item.name}
						</h2>
						<h3 className="text-secondary-text font-normal text-sm text-balance sm:text-lg xl:text-xl">
							{subtitle}
						</h3>
					</div>
				</div>
			</Link>
		</li>
	);
}
