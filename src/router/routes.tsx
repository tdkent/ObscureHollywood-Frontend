import { Route, Routes as RouteGroup } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import DisclaimerPage from "@/pages/Disclaimer.page";
import FeatureArticlePage from "@/pages/FeatureArticle.page";
import FeaturesPage from "@/pages/Features.page";
import FilmArticlePage from "@/pages/FilmArticle.page";
import FilmsPage from "@/pages/Films.page";
import HomePage from "@/pages/Home.page";
import NotFoundPage from "@/pages/NotFound.page";
import PeoplePage from "@/pages/People.page";
import PersonArticlePage from "@/pages/PersonArticle.page";
import StudioArticlePage from "@/pages/StudioArticle.page";
import StudiosPage from "@/pages/Studios.page";
import TagArticlePage from "@/pages/TagArticle.page";

export default function Routes() {
	return (
		<RouteGroup>
			<Route element={<RootLayout />}>
				<Route index element={<HomePage />} />
				<Route element={<FeaturesPage />} path="/features" />
				<Route element={<FeatureArticlePage />} path="/features/:slug" />
				<Route element={<FilmsPage />} path="/films" />
				<Route element={<FilmArticlePage />} path="/films/:slug" />
				<Route element={<PeoplePage />} path="/people" />
				<Route element={<PersonArticlePage />} path="/people/:slug" />
				<Route element={<StudiosPage />} path="/studios" />
				<Route element={<StudioArticlePage />} path="/studios/:slug" />
				<Route element={<TagArticlePage />} path="/tags/:slug" />
				<Route element={<DisclaimerPage />} path="/disclaimer" />
				<Route element={<NotFoundPage />} path="*" />
			</Route>
		</RouteGroup>
	);
}
