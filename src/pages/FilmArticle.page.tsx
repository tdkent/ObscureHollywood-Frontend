import FilmArticle from "@/components/article/film/FilmArticle";
import DetailPage from "@/components/layout/containers/DetailPage";

export default function FeatureArticlePage() {
	return (
		<DetailPage labelText="Film">
			<FilmArticle />
		</DetailPage>
	);
}
