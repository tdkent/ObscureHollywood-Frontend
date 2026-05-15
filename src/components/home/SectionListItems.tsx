import { useQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";
import httpRequest from "@/api/httpRequest";
import DisplayError from "@/components/shared/DisplayError";
import Image from "@/components/shared/Image";
import Loading from "@/components/shared/Loading";
import { getPersonLifespanString } from "@/lib/utils/formatPersonDates";
import type { Feature } from "@/types/feature.interface";
import type { Film } from "@/types/film.interface";
import type { PartialListItem } from "@/types/paginated-response.interface";
import type { Person } from "@/types/person.interface";

interface Props {
	route: "features" | "films" | "people";
}

export default function SectionListItems({ route }: Props) {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	const { data, error, isPending } = useQuery({
		queryKey: [route, "recent"],
		queryFn: () => httpRequest(`/${route}/recent`),
	});

	if (isPending) return <Loading variant="homeSectionItems" />;
	if (error) return <DisplayError error={error} />;

	const recentArticles = data as PartialListItem[];

	// Check if user has motion reduced in OS settings
	//? Use manual check instead of `motion-safe` query due to `opacity-0` rule
	const reduceMotion = window.matchMedia("(prefers-reduced-motion)").matches;

	return (
		<ul className={`flex flex-col gap-6 px-4`}>
			{recentArticles.map((ra) => {
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
					<li
						className={`rounded-2xl overflow-hidden ${reduceMotion ? "" : `opacity-0 ${inView ? `animate-fade-move-up` : ""}`}`}
						key={id}
						ref={ref}
					>
						<Link to={`/${route}/${slug}`}>
							<div className="p-4 flex items-center flex-nowrap gap-4">
								<Image
									altText={name}
									containerStyles="rounded-2xl w-3/10 aspect-[6/5]"
									slug={slug}
								/>
								<div className="flex flex-col text-left text-sm">
									<span className=" font-bold">{name}</span>
									<span>{subtitle}</span>
								</div>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
