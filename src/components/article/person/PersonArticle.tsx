import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import PersonDetails from "@/components/article/person/PersonDetails";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { PersonWithRelations } from "@/types/person.interface";
import type { Entity } from "@/types/ui.interface";

export default function PersonArticle() {
	const { slug } = useParams();
	const { pathname } = useLocation();

	const entity: Entity = "people";

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	return (
		<div>
			<PersonDetails person={data as PersonWithRelations} />
		</div>
	);
}
