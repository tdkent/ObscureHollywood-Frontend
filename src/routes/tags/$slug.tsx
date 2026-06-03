import { createFileRoute } from "@tanstack/react-router";
import TagArticle from "@/components/article/tag/TagArticle";
import DetailPage from "@/components/layout/containers/DetailPage";

export const Route = createFileRoute("/tags/$slug")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<DetailPage>
			<TagArticle />
		</DetailPage>
	);
}
