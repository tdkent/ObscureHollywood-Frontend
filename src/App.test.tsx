import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "@/test/render";

const homeHeading = "Neglected films.Stars of the past.The obscure revisited.";

// Mock intersection observer API: https://vitest.dev/guide/mocking/globals
const IntersectionObserverMock = vi.fn(
	class {
		disconnect = vi.fn();
		observe = vi.fn();
		takeRecords = vi.fn();
		unobserve = vi.fn();
	},
);

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

/**
 * ROUTE TESTS
 * Test that defined routes render the correct UI
 * Test that undefined routes render 404 UI
 */
describe("App root layer", () => {
	it("renders Index page at /", async () => {
		renderWithRouter("/");

		expect(
			await screen.findByRole("heading", { name: homeHeading }),
		).toBeInTheDocument();
	});

	it("renders Features page at /features", async () => {
		renderWithRouter("/features");

		expect(
			await screen.findByRole("heading", { name: "Features" }),
		).toBeInTheDocument();
	});

	it("renders correct Feature Article page at /features/corriganville", async () => {
		renderWithRouter("/features/corriganville");

		expect(
			await screen.findByRole("heading", { name: "Corriganville" }),
		).toBeInTheDocument();
	});

	it("renders Films page at /films", async () => {
		renderWithRouter("/films");

		expect(
			await screen.findByRole("heading", { name: "Films" }),
		).toBeInTheDocument();
	});

	it("renders correct Film Article page at /films/the-americano-1916", async () => {
		renderWithRouter("/films/the-americano-1916");

		expect(
			await screen.findByRole("heading", { name: "The Americano" }),
		).toBeInTheDocument();
	});

	it("renders People page at /people", async () => {
		renderWithRouter("/people");

		expect(
			await screen.findByRole("heading", { name: "People" }),
		).toBeInTheDocument();
	});

	it("renders correct Person Article page at /people/alma-rubens", async () => {
		renderWithRouter("/people/alma-rubens");

		expect(
			await screen.findByRole("heading", { name: "Alma Rubens" }),
		).toBeInTheDocument();
	});

	it("renders Quiz page at /quiz", async () => {
		renderWithRouter("/quiz");

		expect(
			await screen.findByRole("heading", { name: "Quiz" }),
		).toBeInTheDocument();
	});

	it("renders correct Quiz page at /quiz/at-the-movies", async () => {
		renderWithRouter("/quiz/at-the-movies");

		expect(
			await screen.findByRole("heading", { name: /at the movies/i }),
		).toBeInTheDocument();
	});

	it("renders My Quizzes page at /my-quizzes", async () => {
		renderWithRouter("/my-quizzes");

		expect(
			await screen.findByRole("heading", { name: /my quizzes/i }),
		).toBeInTheDocument();
	});

	it("renders Search page at /search", async () => {
		renderWithRouter("/search");

		expect(
			await screen.findByRole("heading", { name: "Search Results" }),
		).toBeInTheDocument();
	});

	it("renders Studios page at /studios", async () => {
		renderWithRouter("/studios");

		expect(
			await screen.findByRole("heading", { name: "Studios" }),
		).toBeInTheDocument();
	});

	it("renders correct Studio Article page at /studios/paramount-pictures", async () => {
		renderWithRouter("/studios/paramount-pictures");

		expect(
			await screen.findByRole("heading", { name: "Paramount Pictures" }),
		).toBeInTheDocument();
	});

	it("renders correct Tag Article page at /tags/decade-1930s", async () => {
		renderWithRouter("/tags/decade-1930s");

		expect(
			await screen.findByRole("heading", { name: /Decade: 1930s/i }),
		).toBeInTheDocument();
	});

	it("renders 404 page at unknown routes", async () => {
		renderWithRouter("/bad-route");

		expect(
			await screen.findByRole("heading", { name: /404/i }),
		).toBeInTheDocument();
	});
});

/**
 * NAVIGATION TESTS
 * Test primary navigation elements.
 */
describe("Root nav element", () => {
	const user = userEvent.setup();

	/**
	 * Mobile navigation tests
	 */

	it("navigates from /home to /features using mobile nav", async () => {
		renderWithRouter("/");

		const link = await screen.findByTestId("mobile-features-link");

		await user.click(link);

		// await user.click(screen.getByTestId("mobile-features-link"));

		expect(
			await screen.findByRole("heading", { name: "Features" }),
		).toBeInTheDocument();
	});

	it("navigates from /features to /films using mobile nav", async () => {
		renderWithRouter("/features");

		const link = await screen.findByTestId("mobile-films-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: "Films",
			}),
		).toBeInTheDocument();
	});

	it("navigates from /films to /people using mobile nav", async () => {
		renderWithRouter("/films");

		const link = await screen.findByTestId("mobile-people-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: "People",
			}),
		).toBeInTheDocument();
	});

	it("navigates from /people to home page using mobile nav", async () => {
		renderWithRouter("/people");

		const link = await screen.findByTestId("mobile-home-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: homeHeading,
			}),
		).toBeInTheDocument();
	});

	it("navigates from /features/corriganville to home page using mobile nav", async () => {
		renderWithRouter("/features/corriganville");

		const link = await screen.findByTestId("mobile-home-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: homeHeading,
			}),
		).toBeInTheDocument();
	});

	it("navigates from /films/the-americano-1916 to home using mobile nav", async () => {
		renderWithRouter("/films/the-americano-1916");

		const link = await screen.findByTestId("mobile-home-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: homeHeading,
			}),
		).toBeInTheDocument();
	});

	it("navigates from /people/alma-rubens to home using mobile nav", async () => {
		renderWithRouter("/people/alma-rubens");

		const link = await screen.findByTestId("mobile-home-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: homeHeading,
			}),
		).toBeInTheDocument();
	});

	it("navigates from /studios/paramount-pictures to home using mobile nav", async () => {
		renderWithRouter("/studios/paramount-pictures");

		const link = await screen.findByTestId("mobile-home-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: homeHeading,
			}),
		).toBeInTheDocument();
	});

	it("navigates from /tags/decade-1930s to home using mobile nav", async () => {
		renderWithRouter("/tags/decade-1930s");

		const link = await screen.findByTestId("mobile-home-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: homeHeading,
			}),
		).toBeInTheDocument();
	});

	it("navigates from Quiz index page to home page using mobile nav", async () => {
		renderWithRouter("/quiz");

		const link = await screen.findByTestId("mobile-home-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: homeHeading,
			}),
		).toBeInTheDocument();
	});

	it("navigates from At the Movies quiz page to home page using mobile nav", async () => {
		renderWithRouter("/quiz/at-the-movies");

		const link = await screen.findByTestId("mobile-home-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: homeHeading,
			}),
		).toBeInTheDocument();
	});

	it("navigates from My Quizzes page to home page using mobile nav", async () => {
		renderWithRouter("/my-quizzes");

		const link = await screen.findByTestId("mobile-home-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: homeHeading,
			}),
		).toBeInTheDocument();
	});

	it("navigates from Not Found to home page using mobile nav", async () => {
		renderWithRouter("/bad-route");

		const link = await screen.findByTestId("mobile-home-link");

		await user.click(link);

		expect(
			await screen.findByRole("heading", {
				name: homeHeading,
			}),
		).toBeInTheDocument();
	});

	/**
	 * Desktop navigation tests
	 */

	it("features nav link points to features page", async () => {
		await renderWithRouter("/");

		const link = await screen.findByTestId("features-link");

		expect(link).toHaveAttribute(
			"href",

			expect.stringContaining("/features"),
		);
	});

	it("films nav link points to films page", async () => {
		await renderWithRouter("/");

		const link = await screen.findByTestId("films-link");

		expect(link).toHaveAttribute(
			"href",

			expect.stringContaining("/films"),
		);
	});

	it("people nav link points to people page", async () => {
		await renderWithRouter("/");

		const link = await screen.findByTestId("people-link");

		expect(link).toHaveAttribute(
			"href",

			expect.stringContaining("/people"),
		);
	});

	it("quiz nav link points to quiz page", async () => {
		await renderWithRouter("/");

		const link = await screen.findByTestId("quiz-link");

		expect(link).toHaveAttribute(
			"href",

			expect.stringContaining("/quiz"),
		);
	});
});
