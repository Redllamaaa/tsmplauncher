import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";
import globals from "globals";

export default defineConfig(
  {
    ignores: ["**/dist/**", "node_modules", "eslint.config.mjs"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
      ecmaVersion: 2024,
    },
  },
  {
    files: ["**/*.js"],
    plugins: {
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/indent": ["error", 2],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "none",
            requireLast: false,
          },
          singleline: {
            delimiter: "comma",
            requireLast: false,
          },
        },
      ],
      "@stylistic/linebreak-style": ["error", "unix"],
      "no-var": ["error"],
      "no-control-regex": "off",
      "no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          caughtErrorsIgnorePattern: "^_",
          ignoreRestSiblings: false,
          argsIgnorePattern: "^_|^reject$",
        },
      ],
    },
  },
  {
    files: ["app/assets/js/**/*.js"],
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-unassigned-vars": "off",
      "no-useless-assignment": "off",
    },
  },
);
