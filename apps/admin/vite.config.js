import { defineConfig } from "vite";

export default defineConfig({
	css: {
		modules: {
			localsConvention: "camelCaseOnly",
		},
		preprocessorOptions: {
			less: {
				modifyVars: { "primary-color": "#1890ff" },
				javascriptEnabled: true,
			},
		},
	},
});
