import globals from "globals";
import pluginJs from "@eslint/js";
import jest from "eslint-plugin-jest";
import eslintRecommended from "eslint-plugin-prettier/recommended";

export default [
  eslintRecommended,
  {
    languageOptions: {
      globals: globals.browser 
    },
    rules: {
      // правила, рекомендуемые eslint
      ...pluginJs.configs.recommended.rules,
      // Ниже свои правила можем добавить/переписать
      "prefer-const": "error",
      "no-unused-vars": "error",
      "semi": "error",
    },
  },
  {
    files: ["src/**/*.test.js"],
    ...jest.configs['flat/recommended'],
  }
];