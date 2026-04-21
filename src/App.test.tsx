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

	it("renders Features page at /features", () => {
		renderWithClient(<App />, ["/features"]);

		expect(
			screen.getByRole("heading", { name: "Features" }),
		).toBeInTheDocument();
	});

	it("renders correct Feature Article page at /features/corriganville", async () => {
		renderWithClient(<App />, ["/features/corriganville"]);

		expect(
			await screen.findByRole("heading", { name: "Corriganville" }),
		).toBeInTheDocument();
	});

	it("renders Films page at /films", () => {
		renderWithClient(<App />, ["/films"]);

		expect(screen.getByRole("heading", { name: "Films" })).toBeInTheDocument();
	});

	it("renders correct Film Article page at /films/the-americano-1916", async () => {
		renderWithClient(<App />, ["/films/the-americano-1916"]);

		expect(
			await screen.findByRole("heading", { name: "The Americano" }),
		).toBeInTheDocument();
	});

	it("renders People page at /people", () => {
		renderWithClient(<App />, ["/people"]);

		expect(screen.getByRole("heading", { name: "People" })).toBeInTheDocument();
	});

	it("renders correct Person Article page at /people/alma-rubens", async () => {
		renderWithClient(<App />, ["/people/alma-rubens"]);

		expect(
			await screen.findByRole("heading", { name: "Alma Rubens" }),
		).toBeInTheDocument();
	});

	it("renders Studios page at /studios", () => {
		renderWithClient(<App />, ["/studios"]);

		expect(
			screen.getByRole("heading", { name: "Studios" }),
		).toBeInTheDocument();
	});

	it("renders correct Studio Article page at /studios/paramount-pictures", async () => {
		renderWithClient(<App />, ["/studios/paramount-pictures"]);

		expect(
			await screen.findByRole("heading", { name: "Paramount Pictures" }),
		).toBeInTheDocument();
	});

	it("renders correct Tag Article page at /tags/decade-1930s", async () => {
		renderWithClient(<App />, ["/tags/decade-1930s"]);

		expect(
			await screen.findByRole("heading", { name: "1930s" }),
		).toBeInTheDocument();
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
