import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, vi } from "vitest";
import "@testing-library/jest-dom";
import { server } from "@/test/mocks";

//? Mock window.matchMedia: https://rebeccamdeprey.com/blog/mock-windowmatchmedia-in-vitest
Object.defineProperty(window, "matchMedia", {
	writable: true,
	enumerable: true,
	value: vi.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: vi.fn(), // deprecated
		removeListener: vi.fn(), // deprecated
		addEventListener: vi.fn(),
		removeEventListener: vi.fn(),
		dispatchEvent: vi.fn(),
	})),
});

//? Mock window.scrollTo()
Object.defineProperty(window, "scrollTo", {
	writable: true,
	value: vi.fn(),
});

beforeAll(() => server.listen());

afterEach(() => {
	server.resetHandlers();
	cleanup();
	vi.clearAllMocks();
});

afterAll(() => server.close());
