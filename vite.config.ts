/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/

// @ts-ignore
// @ts-ignore
// @ts-ignore
export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  // server: {
  //   port: 8081,
  // },
  // preview: {
  //   port: 3000,
  // },

  // test: {
  //   globals: true,
  //   environment: "jsdom",
  //   setupFiles: ["./src/setup.ts"],
  // }
});
