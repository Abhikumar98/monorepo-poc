const WebpackBar = require("webpackbar");
const CracoAlias = require("craco-alias");
const CracoAntDesignPlugin = require("craco-antd");
const CracoLessPlugin = require("craco-less");
const path = require("path");
const BundleAnalyzerPlugin =
	require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const { getLoader, loaderByName } = require("@craco/craco");

const packages = [];
packages.push(path.join(__dirname, "../packages"));

module.exports = {
	eslint: {
		enable: false,
	},
	webpack: {
		configure: (webpackConfig, arg) => {
			const { isFound, match } = getLoader(
				webpackConfig,
				loaderByName("babel-loader")
			);
			if (isFound) {
				const include = Array.isArray(match.loader.include)
					? match.loader.include
					: [match.loader.include];

				match.loader.include = include.concat(packages);
			}
			return webpackConfig;
		},
	},
	plugins: [
		// {
		// 	plugin: CracoAntDesignPlugin,
		// 	options: {
		// 		customizeThemeLessPath: path.join(
		// 			__dirname,
		// 			"./src/stylesheets/theme.less"
		// 		),
		// 	},
		// },
		// {
		// 	plugin: CracoAlias,
		// 	options: {
		// 		source: "tsconfig",
		// 		baseUrl: ".",
		// 		tsConfigPath: "./paths.json",
		// 	},
		// },
		{
			plugin: CracoLessPlugin,
		},
		{
			plugin: CracoLessPlugin,
			options: {
				modifyLessRule: function (lessRule) {
					lessRule.test = /\.(module)\.(less)$/;
					lessRule.exclude = /node_modules/;

					return lessRule;
				},
				cssLoaderOptions: {
					modules: { localIdentName: "[local]_[hash:base64:5]" },
				},
			},
		},
		// { plugin: fastRefreshCracoPlugin },
		{
			plugin: {
				overrideJestConfig: ({ jestConfig }) => {
					jestConfig = {
						...jestConfig,
						reporters: [
							"default",
							["<rootDir>/node_modules/jest-html-reporter", {}],
							"jest-junit",
						],
						coverageReporters: ["text", "cobertura"],
					};

					return jestConfig;
				},
			},
		},
	],
	style: {
		// postcss: {
		// 	plugins: [require("tailwindcss"), require("autoprefixer")],
		// },
	},
};
