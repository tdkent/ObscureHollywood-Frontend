import { Route, Routes as RouteGroup } from "react-router";
import RootLayout from "@/layouts/RootLayout";
import DisclaimerPage from "@/pages/Disclaimer.page";
import FeaturesPage from "@/pages/Features.page";
import FilmsPage from "@/pages/Films.page";
import HomePage from "@/pages/Home.page";
import NotFoundPage from "@/pages/NotFound.page";
import PeoplePage from "@/pages/People.page";

export default function Routes() {
	return (
		<RouteGroup>
			<Route element={<RootLayout />}>
				<Route index element={<HomePage />} />
				<Route element={<FeaturesPage />} path="/features" />
				<Route element={<FilmsPage />} path="/films" />
				<Route element={<PeoplePage />} path="/people" />
				<Route element={<DisclaimerPage />} path="/disclaimer" />
				<Route element={<NotFoundPage />} path="*" />
			</Route>
		</RouteGroup>
	);
}
