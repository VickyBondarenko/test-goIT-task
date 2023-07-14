import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://vickybondarenko.github.io/test-goIT-task/",
  plugins: [react()],
});
