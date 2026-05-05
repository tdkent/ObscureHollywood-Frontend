import Image from "@/components/shared/Image";
import type { FeatureWithRelations } from "@/types/feature.interface";

interface Props {
	feature: FeatureWithRelations;
}

export default function FeatureDetails({ feature }: Props) {
	const { name, slug, subtitle } = feature;
	return (
		<div className="flex flex-col gap-8 my-2">
			<header className="flex flex-col gap-4">
				<div>
					<h1 className="text-3xl font-normal">{name}</h1>
					<h2 className="text-xl font-light">{subtitle}</h2>
				</div>
				<Image
					altText={name}
					fetchPriority="high"
					lazyLoading="eager"
					slug={slug}
				/>
			</header>
		</div>
	);
}
