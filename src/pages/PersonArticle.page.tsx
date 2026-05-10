import PersonArticle from "@/components/article/person/PersonArticle";
import DetailPage from "@/components/layout/containers/DetailPage";

export default function FeatureArticlePage() {
	return (
		<DetailPage labelText="Person">
			<PersonArticle />
		</DetailPage>
	);
}
