import type { Entity } from "@/lib/paginatedSortOptions";
import type { FeatureWithRelations } from "@/types/feature.interface";

interface Props {
	data: unknown;
	entity: Entity;
}

export default function ArticleIntro({ data, entity }: Props) {
	if (entity === "features") {
		const articleData = data as FeatureWithRelations;

		return (
			<div>
				<h1>{articleData.name}</h1>
			</div>
		);
	}

	return <div></div>;
}
