import { defineConfig } from "vite";
import dotenv from "dotenv";
import react from "@vitejs/plugin-react-swc";

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    // This will replace the occurrences of `import.meta.env` with the actual values from your .env file.
    'process.env': process.env
  }
});
