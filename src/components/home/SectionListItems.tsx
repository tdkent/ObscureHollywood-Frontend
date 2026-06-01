import { useQuery } from "@tanstack/react-query";
import SectionListItem from "@/components/home/SectionListItem";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import { getPersonLifespanString } from "@/lib/utils/formatPersonDates";
import type { Feature } from "@/types/feature.interface";
import type { Film } from "@/types/film.interface";
import type { PartialListItem } from "@/types/paginated-response.interface";
import type { Person } from "@/types/person.interface";
import { sectionListItemQueryOptions } from "@/util/query";

interface Props {
	route: "features" | "films" | "people";
}

export default function SectionListItems({ route }: Props) {
	//? Do not use SuspenseQuery to allow local loading/error UI handling
	const { data, error, isPending } = useQuery(
		sectionListItemQueryOptions(route),
	);

	if (isPending) return <Loading variant="homeSectionItems" />;
	if (error) return <DisplayError />;

	const recentArticles = data as unknown as PartialListItem[];

	return (
		<ul className={`flex flex-col gap-6 px-4 sm:px-36 lg:flex-row lg:px-12`}>
			{recentArticles.map((ra, idx) => {
				const { id, name, slug } = ra;

				let subtitle: string | number;

				if (route === "features") {
					subtitle = (ra as Feature).subtitle;
				} else if (route === "films") {
					subtitle = (ra as Film).releaseYear;
				} else if (route === "people") {
					const { birthDate, deathDate } = ra as Person;
					subtitle = getPersonLifespanString({ birthDate, deathDate });
				} else {
					subtitle = "";
				}

				return (
					<SectionListItem
						key={id}
						idx={idx}
						name={name}
						route={route}
						slug={slug}
						subtitle={subtitle}
					/>
				);
			})}
		</ul>
	);
}
