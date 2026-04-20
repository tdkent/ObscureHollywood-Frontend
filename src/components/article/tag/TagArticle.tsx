import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import TagDetails from "@/components/article/tag/TagDetails";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { TagWithRelations } from "@/types/tag.interface";
import type { Entity } from "@/types/ui.interface";

export default function TagArticle() {
	const { slug } = useParams();
	const { pathname } = useLocation();

	const entity: Entity = "tags";

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	return (
		<div>
			<TagDetails tag={data as TagWithRelations} />
		</div>
	);
}
