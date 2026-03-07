import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import prettierRecommended from "eslint-plugin-prettier/recommended";

export default defineConfig([
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "no-console": "off",
      "prefer-const": "warn",
      "no-undef": "error",
    },
  },
  ...tseslint.configs.recommended,
   prettierRecommended,
]);
