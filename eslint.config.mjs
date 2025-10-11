import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import tailwind from "eslint-plugin-tailwindcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
 baseDirectory: __dirname,
});

const eslintConfig = [
 ...compat.extends("next/core-web-vitals", "next/typescript"),

 {
  files: ["**/*.{js,jsx,ts,tsx}"],
  plugins: { tailwindcss: tailwind },
  rules: {
   "tailwindcss/classnames-order": "warn",
   "tailwindcss/no-contradicting-classname": "warn",
  },
 },

 {
  ignores: ["node_modules/**", ".next/**", "out/**", "build/**", "next-env.d.ts"],
 },
];

export default eslintConfig;
