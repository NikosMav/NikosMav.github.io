import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// nikosmav.github.io is the root user site, so assets resolve from "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
