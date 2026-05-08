import TagArticle from "@/components/article/tag/TagArticle";
import DetailPage from "@/components/layout/containers/DetailPage";

export default function TagArticlePage() {
	return (
		<DetailPage labelText="Tag">
			<TagArticle />
		</DetailPage>
	);
}
