import FeatureArticle from "@/components/article/features/FeatureArticle";
import DetailPage from "@/components/layout/containers/DetailPage";

export default function FeatureArticlePage() {
	return (
		<DetailPage labelText="Feature">
			<FeatureArticle />
		</DetailPage>
	);
}
