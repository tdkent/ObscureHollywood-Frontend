import { useInView } from "react-intersection-observer";
import Image from "@/components/shared/Image";

interface Props {
	imgs: { name: string; slug: string }[];
}

export default function SectionHeaderImgs({ imgs }: Props) {
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	// Check if user has motion reduced in OS settings
	//? Use manual check instead of `motion-safe` query due to `opacity-0` rule
	const reduceMotion = window.matchMedia("(prefers-reduced-motion)").matches;

	const delays = [
		"",
		"[animation-delay:300ms]",
		"[animation-delay:600ms]",
		"[animation-delay:900ms]",
		"[animation-delay:1200ms]",
	];

	return (
		<ul className="flex flex-nowrap" ref={ref}>
			{imgs.map(({ name, slug }, idx) => {
				return (
					<li
						key={slug}
						className={`max-sm:even:hidden sm:max-lg:last:hidden ${reduceMotion ? "" : `opacity-0 ${inView ? `animate-fade ${delays[idx]}` : ""}`}`}
					>
						<Image
							altText={name}
							sizes="(max-width: 640px) 33.3vw, (max-width: 1024px) 25vw, (max-width: 1170px) 20vw, 240px"
							slug={slug}
						/>
					</li>
				);
			})}
		</ul>
	);
}
