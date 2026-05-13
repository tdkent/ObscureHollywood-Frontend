import { useQuery } from "@tanstack/react-query";
import httpRequest from "@/api/httpRequest";
import SectionHeaderImgs from "@/components/home/SectionHeaderImgs";
import SectionListItem from "@/components/home/SectionListItem";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import { getPersonLifespanString } from "@/lib/utils/formatPersonDates";
import type { Feature } from "@/types/feature.interface";
import type { Film } from "@/types/film.interface";
import type { PartialListItem } from "@/types/paginated-response.interface";
import type { Person } from "@/types/person.interface";

interface Props {
	imgs: { name: string; slug: string }[];
	listHeading: string;
	route: "features" | "films" | "people";
	sectionClass: string;
	text: string;
	title: string;
}

export default function Section({
	imgs,
	listHeading,
	route,
	sectionClass,
	text,
	title,
}: Props) {
	const { data, error, isPending } = useQuery({
		queryKey: [route, "recent"],
		queryFn: () => httpRequest(`/${route}/recent`),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	const recentArticles = data as PartialListItem[];

	return (
		<section className={`py-8 ${sectionClass}`}>
			<SectionHeaderImgs imgs={imgs} />
			<div className="flex flex-col text-center gap-4 py-6">
				<h2 className="text-3xl font-bold px-6">{title}</h2>
				<p className="px-6">{text}</p>
				<div className="flex flex-col gap-4">
					<h3 className="font-bodini-moda italic text-2xl font-bold">
						{listHeading}:
					</h3>
					<ul className={`flex flex-col gap-6 px-4`}>
						{recentArticles.map((ra) => {
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
									key={ra.id}
									item={ra}
									route={route}
									subtitle={subtitle}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</section>
	);
}
