// rollup.config.js
import * as path from "path";
import * as fs from "fs";
import typescript from "rollup-plugin-typescript2";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import inject from "rollup-plugin-inject";

/**
 * Current modules pacakge.json
 */
const pckg = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), "package.json"), "utf-8")
);

export default () => [
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: path.resolve(process.cwd(), "src", "index.ts"),
    output: [
      pckg.main && { file: pckg.main, format: "cjs" },
      pckg.module && { file: pckg.module, format: "es" },
    ].filter(Boolean),
    external: [
      ...Object.keys(pckg.dependencies || {}),
      ...Object.keys(pckg.peerDependencies || {}),
    ],
    plugins: [
      json(),
      commonjs(),
      typescript(),
      inject({
        window: "global/window",
      }),
    ],
  },
  // {
  //   input: path.resolve(process.cwd(), 'src', 'index.ts'),
  //   output: [{ file: pckg.types, format: 'es' }],
  //   plugins: [dts()],
  // },
];
