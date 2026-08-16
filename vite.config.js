import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Keep asset paths portable across GitHub Pages repository names.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
