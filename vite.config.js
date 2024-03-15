import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@fonts",
        replacement: fileURLToPath(
          new URL("./src/assets/Font/", import.meta.url)
        ),
      },
      {
        find: "@ats",
        replacement: fileURLToPath(new URL("./src/assets/", import.meta.url)),
      },
      {
        find: "@cp",
        replacement: fileURLToPath(
          new URL("./src/components/", import.meta.url)
        ),
      },
    ],
  },
});
