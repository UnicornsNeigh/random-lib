import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import inject from "@rollup/plugin-inject";
import json from "@rollup/plugin-json";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import externals from "rollup-plugin-node-externals";

import resolve from "@rollup/plugin-node-resolve";
import dts from "rollup-plugin-dts";

const EXTENSIONS = [".js", ".jsx", ".ts", ".tsx"];

const transpile = {
  input: "src/index.ts",
  external: (source) => {
    // @ethersproject/* modules are provided by ethers

    return source.startsWith("@ethersproject") || source.startsWith("react");
  },
  plugins: [
    // Dependency resolution
    externals({
      exclude: [
        "constants",
        /@lingui\/(core|react)/, // @lingui incorrectly exports esm, so it must be bundled in
        /\.json$/, // esm does not support JSON loading, so it must be bundled in
      ], // marks dependencies as external so they are not bundled inline
      deps: true,
      peerDeps: true,
    }),
    resolve({ extensions: EXTENSIONS }), // resolves third-party modules within node_modules/

    // Source code transformation
    json(), // imports json as ES6; doing so enables module resolution
    // url({ include: ["**/*.png", "**/*.svg"], limit: Infinity }), // imports assets as data URIs
    // svgr({ jsxRuntime: "automatic" }), // imports svgs as React components (without re-importing React)
    // svg(),
    // image(),
    url({ include: ["**/*.png", "**/*.svg"], limit: Infinity }), // imports assets as data URIs
    svgr({ jsxRuntime: "automatic" }), // imports svgs as React components (without re-importing React)
    commonjs(), // transforms cjs dependencies into tree-shakeable ES modules

    babel({
      babelHelpers: "runtime",
      extensions: EXTENSIONS,
    }),
    inject({ React: "react" }), // imports React (on the top-level, un-renamed), for the classic runtime
  ],
  onwarn: (warning, warn) => {
    // This pipeline is for transpilation - checking is done through tsc.
    if (warning.code === "UNUSED_EXTERNAL_IMPORT") return;

    warn(warning);
    console.log(warning.loc, "\n");
  },
};

const esm = {
  ...transpile,
  output: {
    dir: "dist",
    format: "esm",
    sourcemap: false,
  },
};

const cjs = {
  ...transpile,
  output: {
    dir: "dist/cjs",
    entryFileNames: "[name].cjs",
    chunkFileNames: "[name]-[hash].cjs",
    format: "cjs",
    sourcemap: false,
  },
  watch: false,
};

const types = {
  input: "dts/index.d.ts",
  output: { file: "dist/index.d.ts" },
  external: (source) =>
    source.endsWith(".scss") || source.endsWith("/external.d.ts"),
  plugins: [dts({ compilerOptions: { baseUrl: "dts" } })],
  watch: false,
};

const config = [esm, cjs, types];
config.config = { ...esm, output: { ...esm.output, sourcemap: true } };
module.exports = config;
