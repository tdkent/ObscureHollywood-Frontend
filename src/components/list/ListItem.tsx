import { Link } from "@tanstack/react-router";
import Image from "@/components/image/Image";
import type { Feature } from "@/types/feature.interface";
import type { Film } from "@/types/film.interface";
import type { PartialListItem } from "@/types/paginated-response.interface";
import type { Person } from "@/types/person.interface";
import type { Search } from "@/types/search.interface";
import type { Entity } from "@/types/ui.interface";
import { getPersonLifespanString } from "@/util/formatPersonDates";

interface Props {
	entity: Entity;
	idx: number;
	item: PartialListItem;
	useCardTheme: boolean;
}

export default function ListItem({ entity, idx, item, useCardTheme }: Props) {
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

	const isLCP = idx <= 5;

	return (
		<li
			className={
				useCardTheme
					? "px-2 py-4 md:py-6 sm:basis-1/2 lg:basis-1/3"
					: "border-b first:border-t"
			}
		>
			<Link to={link}>
				<div
					className={`flex justify-between ${useCardTheme ? "overflow-hidden flex-col mx-6 sm:mx-0" : "flex-row py-3 px-6 gap-4 sm:py-4 sm:gap-6 sm:px-12"}`}
				>
					<Image
						altText={item.name}
						containerStyles={`flex shrink-0 items-center justify-center ${useCardTheme ? "rounded-lg" : "border size-18 sm:size-20 md:size-22 lg:size-36"}`}
						fetchPriority={isLCP ? "high" : "low"}
						lazyLoading={isLCP ? "eager" : "lazy"}
						personGender={item?.gender}
						sizes="(max-width: 640px) 72px, (max-width: 768px) 80px, (max-width: 1024px) 88px, 144px"
						slug={item.slug}
					/>
					<div
						className={`flex flex-col grow
							${useCardTheme ? "py-3 px-2 text-center lg:py-4" : "gap-1"}
						`}
					>
						<h2
							className={`text-lg text-pretty ${useCardTheme ? "" : "w-fit sm:text-xl xl:text-2xl"}`}
						>
							{item.name}
						</h2>
						<h3
							className={`text-secondary-text font-normal text-base text-pretty ${useCardTheme ? "" : "sm:text-lg xl:text-xl"}`}
						>
							{subtitle}
						</h3>
					</div>
				</div>
			</Link>
		</li>
	);
}
