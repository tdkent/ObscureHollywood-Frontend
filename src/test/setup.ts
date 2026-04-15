import { cleanup } from "@testing-library/react";
import { afterAll, afterEach, beforeAll, vi } from "vitest";
import "@testing-library/jest-dom";
import { server } from "@/test/mocks";

beforeAll(() => server.listen());

afterEach(() => {
	server.resetHandlers();
	cleanup();
	vi.clearAllMocks();
});

afterAll(() => server.close());
