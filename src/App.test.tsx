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
});
