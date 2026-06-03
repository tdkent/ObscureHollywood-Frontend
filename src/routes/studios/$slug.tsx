import { createFileRoute } from "@tanstack/react-router";
import StudioArticle from "@/components/article/studio/StudioArticle";
import DetailPage from "@/components/layout/containers/DetailPage";

export const Route = createFileRoute("/studios/$slug")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<DetailPage>
			<StudioArticle />
		</DetailPage>
	);
}
