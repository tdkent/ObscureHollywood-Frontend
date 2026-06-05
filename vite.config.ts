import path from "node:path";
import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [tanstackStart(), react(), tailwindcss(), netlify()],
	build: {
		assetsDir: "static",
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	ssr: {
		//? Force Vite to bundle for SSR
		noExternal: ["html-react-parser"],
	},
});
