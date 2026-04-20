import type { FeatureWithRelations } from "@/types/feature.interface";

interface Props {
	feature: FeatureWithRelations;
}

export default function FeatureDetails({ feature }: Props) {
	return (
		<section>
			<h1>{feature.name}</h1>
		</section>
	);
}
