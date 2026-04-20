import type { TagWithRelations } from "@/types/tag.interface";

interface Props {
	tag: TagWithRelations;
}

export default function TagDetails({ tag }: Props) {
	return (
		<section>
			<h1>{tag.name}</h1>
		</section>
	);
}
