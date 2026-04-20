import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import StudioDetails from "@/components/article/studio/StudioDetails";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { StudioWithRelations } from "@/types/studio.interface";
import type { Entity } from "@/types/ui.interface";

export default function StudioArticle() {
	const { slug } = useParams();
	const { pathname } = useLocation();

	const entity: Entity = "studios";

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	return (
		<div>
			<StudioDetails studio={data as StudioWithRelations} />
		</div>
	);
}
