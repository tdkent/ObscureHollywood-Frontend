import type { StudioWithRelations } from "@/types/studio.interface";

interface Props {
	studio: StudioWithRelations;
}

export default function StudioDetails({ studio }: Props) {
	return (
		<section>
			<h1>{studio.name}</h1>
		</section>
	);
}
