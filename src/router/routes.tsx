import { Route, Routes as RouteGroup } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import DisclaimerPage from "@/pages/Disclaimer.page";
import FeatureDetailsPage from "@/pages/FeatureDetails.page";
import FeaturesPage from "@/pages/Features.page";
import FilmDetailsPage from "@/pages/FilmDetails.page";
import FilmsPage from "@/pages/Films.page";
import HomePage from "@/pages/Home.page";
import NotFoundPage from "@/pages/NotFound.page";
import PeoplePage from "@/pages/People.page";
import PersonDetailsPage from "@/pages/PersonDetails.page";
import StudioDetailsPage from "@/pages/StudioDetails.page";
import StudiosPage from "@/pages/Studios.page";

export default function Routes() {
	return (
		<RouteGroup>
			<Route element={<RootLayout />}>
				<Route index element={<HomePage />} />
				<Route element={<FeaturesPage />} path="/features" />
				<Route element={<FeatureDetailsPage />} path="/features/:slug" />
				<Route element={<FilmsPage />} path="/films" />
				<Route element={<FilmDetailsPage />} path="/films/:slug" />
				<Route element={<PeoplePage />} path="/people" />
				<Route element={<PersonDetailsPage />} path="/people/:slug" />
				<Route element={<StudiosPage />} path="/studios" />
				<Route element={<StudioDetailsPage />} path="/studios/:slug" />
				<Route element={<DisclaimerPage />} path="/disclaimer" />
				<Route element={<NotFoundPage />} path="*" />
			</Route>
		</RouteGroup>
	);
}
