import typescript from "rollup-plugin-typescript2";
import pkg from './package.json';

export default [
  {
    input: "src/index.ts",
    output: [{
      file: pkg.main,
      format: "cjs",
      globals: {
        axios: "axios"
      }
    }, {
      file: pkg.module,
      format: "es",
      globals: {
        axios: "axios"
      }
    }],
    external: ["axios"],
    plugins: [typescript()]
  }
];
