import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from 'eslint-config-prettier';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "src/generated/prisma/**",
  ]),
  {
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "eqeqeq": "error",
      "curly": "error",
      "no-unused-vars": "error",
      "no-debugger": "error",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]);

export default eslintConfig;
