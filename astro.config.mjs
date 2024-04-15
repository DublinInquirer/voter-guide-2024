import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://dublinvoterguide2024.ie",
  build: {
    format: "file",
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
  ],
});
