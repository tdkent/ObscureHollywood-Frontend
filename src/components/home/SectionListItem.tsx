import { useInView } from "react-intersection-observer";
import { Link } from "react-router";
import Image from "@/components/shared/Image";

interface Props {
	name: string;
	route: "features" | "films" | "people";
	slug: string;
	subtitle: number | string;
}

export default function SectionListItem({
	name,
	route,
	slug,
	subtitle,
}: Props) {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	// Check if user has motion reduced in OS settings
	//? Use manual check instead of `motion-safe` query due to `opacity-0` rule
	const reduceMotion = window.matchMedia("(prefers-reduced-motion)").matches;

	return (
		<li
			className={`rounded-2xl overflow-hidden ${reduceMotion ? "" : `opacity-0 ${inView ? `animate-fade-move-up` : ""}`}`}
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
}
