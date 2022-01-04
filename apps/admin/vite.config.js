import { defineConfig } from "vite";

export default defineConfig({
	css: {
		modules: {
			localsConvention: "camelCaseOnly",
		},
		preprocessorOptions: {
			less: {
				modifyVars: { "primary-color": "#13c2c2" },
				javascriptEnabled: true,
			},
		},
	},
});
