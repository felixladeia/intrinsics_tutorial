import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANT: replace with your repo name
const repoName = "intrinsics_tutorial";

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
});