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

	return (
		<div className="flex flex-nowrap" ref={ref}>
			{imgs.map(({ name, slug }, idx) => {
				return (
					<Image
						key={slug}
						altText={name}
						slug={slug}
						containerStyles={`opacity-0 ${inView ? `animate-fade ${idx ? `animation-delay-${idx * 300}` : ""}` : ""}`}
					/>
				);
			})}
		</div>
	);
}
