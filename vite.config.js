import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // correct for subdomain
  plugins: [react()],
  // build: {
  //   outDir: "tto.iith.ac.in", // 👈 build folder name
  //   emptyOutDir: true
  // }
});
