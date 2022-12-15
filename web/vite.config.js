import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
    watch: {
      // see https://vitejs.dev/config/server-options.html#server-watch
      usePolling: false,
    },
  },
});
