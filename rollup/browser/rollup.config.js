import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import {
	terser
} from "rollup-plugin-terser";
import polyfills from "rollup-plugin-node-polyfills";

import config from "../../babel.config.json";

export default {
	input: "./src/index.js",
	output: {
		file: "./dist/browser/index.js",
		format: "iife",
		name: "BC"
	},
	plugins: [
		babel({
			...config,
			babelHelpers: "bundled"
		}),
		commonjs(),
		resolve({
			browser: true,
			preferBuiltins: false
		}),
		json(),
		terser()
	]
};
