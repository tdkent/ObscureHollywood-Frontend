import path from "node:path";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [
		tanstackRouter({
			// Configure testing environment
			routesDirectory: "./src/routes",
			generatedRouteTree: "./src/routeTree.gen.ts",
			disableLogging: true,
		}),
		react(),
	],
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./src/test/setup.ts",
		watch: false,
		typecheck: { enabled: true },
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
