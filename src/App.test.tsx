import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "@/App";
import { renderWithClient } from "@/test/render";

/**
 * Test that defined routes render the correct UI
 * Test that undefined routes render 404 UI
 */
describe("App root layer", () => {
	it("renders Index page at /", () => {
		renderWithClient(<App />, ["/"]);

		expect(
			screen.getByRole("heading", { name: "Home Page" }),
		).toBeInTheDocument();
	});

	it("renders Films page at /features", () => {
		renderWithClient(<App />, ["/features"]);

		expect(
			screen.getByRole("heading", { name: "Features" }),
		).toBeInTheDocument();
	});

	it("renders Films page at /films", () => {
		renderWithClient(<App />, ["/films"]);

		expect(screen.getByRole("heading", { name: "Films" })).toBeInTheDocument();
	});

	it("renders People page at /people", () => {
		renderWithClient(<App />, ["/people"]);

		expect(screen.getByRole("heading", { name: "People" })).toBeInTheDocument();
	});

	it("renders 404 page at unknown routes", () => {
		renderWithClient(<App />, ["/bad-route"]);

		expect(
			screen.getByRole("heading", { name: /404 - page not found/i }),
		).toBeInTheDocument();
	});
});

/**
 * Test primary navigation elements.
 */
describe("Root nav element", () => {
	const user = userEvent.setup();

	it("navigates from Home to Features using desktop nav", async () => {
		renderWithClient(<App />, ["/"]);

		await user.click(screen.getByTestId("features-link"));
		expect(
			screen.getByRole("heading", { name: "Features" }),
		).toBeInTheDocument();
	});

	it("navigates from Features to Films using desktop nav", async () => {
		renderWithClient(<App />, ["/features"]);

		await user.click(screen.getByTestId("films-link"));

		expect(
			screen.getByRole("heading", {
				name: "Films",
			}),
		).toBeInTheDocument();
	});

	it("navigates from Films to People using desktop nav", async () => {
		renderWithClient(<App />, ["/films"]);

		await user.click(screen.getByTestId("people-link"));

		expect(
			screen.getByRole("heading", {
				name: "People",
			}),
		).toBeInTheDocument();
	});

	it("navigates from People to Home using desktop nav", async () => {
		renderWithClient(<App />, ["/people"]);

		await user.click(screen.getByTestId("home-link"));

		expect(
			screen.getByRole("heading", {
				name: "Home Page",
			}),
		).toBeInTheDocument();
	});

	it("navigates from Not Found to Home using desktop nav", async () => {
		renderWithClient(<App />, ["/bad-route"]);

		await user.click(screen.getByTestId("home-link"));

		expect(
			screen.getByRole("heading", {
				name: "Home Page",
			}),
		).toBeInTheDocument();
	});
});
