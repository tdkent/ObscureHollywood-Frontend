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

	const showListDetails = entity !== "studios";

	return (
		<li
			className={`border-b transition-colors duration-500 first:border-t ${showListDetails ? "min-h-20" : ""}`}
		>
			<Link to={link}>
				<div
					className={`flex justify-between gap-1 px-8 sm:px-24 sm:gap-6 md:flex-row-reverse ${showListDetails ? "py-2 sm:py-4" : "py-5"}`}
				>
					<div className="flex flex-col gap-1 grow">
						<h2 className="w-fit text-base font-semibold sm:text-xl xl:text-2xl">
							{item.name}
						</h2>
						{showListDetails && (
							<span className="text-secondary-text font-normal text-sm sm:text-lg xl:text-xl">
								{subtitle}
							</span>
						)}
					</div>
					{showListDetails && (
						<Image
							altText={item.name}
							containerStyles="flex shrink-0 items-center justify-center border rounded-full size-14 sm:size-20 md:size-22 md:rounded-none lg:size-36"
							sizes="64px"
							slug={item.slug}
						/>
					)}
				</div>
			</Link>
		</li>
	);
}
