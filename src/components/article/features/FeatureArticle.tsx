import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import FeatureDetails from "@/components/article/features/FeatureDetails";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { FeatureWithRelations } from "@/types/feature.interface";
import type { Entity } from "@/types/ui.interface";

export default function FeatureArticle() {
	const { slug } = useParams();
	const { pathname } = useLocation();

	const entity: Entity = "features";

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	return (
		<div>
			<FeatureDetails feature={data as FeatureWithRelations} />
		</div>
	);
}
