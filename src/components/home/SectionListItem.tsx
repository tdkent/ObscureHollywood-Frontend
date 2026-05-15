import { ArrowRight } from "lucide-react";
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
				<div className="p-2 flex items-center flex-nowrap gap-2.5 sm:gap-4 sm:px-4 sm:p-3">
					<Image
						altText={name}
						containerStyles="rounded-lg w-3/10 aspect-[6/5]"
						slug={slug}
					/>
					<div className="flex items-center justify-between w-full">
						<div className="flex flex-col text-left text-sm sm:text-base">
							<span className=" font-bold">{name}</span>
							<span>{subtitle}</span>
						</div>
						<div className="rounded-full p-1 bg-gold sm:p-2">
							<ArrowRight className="size-4 stroke-text-black sm:size-5" />
						</div>
					</div>
				</div>
			</Link>
		</li>
	);
}
