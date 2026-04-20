import { useQuery } from "@tanstack/react-query";
import { useLocation, useParams } from "react-router";
import httpRequest from "@/api/httpRequest";
import ArticleIntro from "@/components/article/ArticleIntro";
import DisplayError from "@/components/shared/DisplayError";
import Loading from "@/components/shared/Loading";
import type { Entity } from "@/lib/paginatedSortOptions";

export default function Article() {
	const { pathname } = useLocation();
	const { slug } = useParams();

	const entity = pathname.split("/")[1] as Entity;

	const { data, error, isPending } = useQuery({
		queryKey: [entity, slug],
		queryFn: () => httpRequest(pathname),
	});

	if (isPending) return <Loading />;
	if (error) return <DisplayError error={error} />;

	return (
		<div>
			<section>
				<ArticleIntro data={data} entity={entity} />
			</section>
		</div>
	);
}
