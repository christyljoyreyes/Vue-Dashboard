import vue from "@vitejs/plugin-vue";
import path from "path";

module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./public/index.html"],
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      space: ["rtl"],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
