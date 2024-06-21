import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5173, // Make sure this port is available and not being used by another service
  },
  build: {
    target: "esnext",
  },
});
