import { screen } from "@testing-library/react";
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
