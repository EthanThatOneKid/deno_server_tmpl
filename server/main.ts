import { serve } from "./deps.ts";

import { handle } from "./handler.ts";
import { PORT } from "./env.ts";

if (import.meta.main) {
  await main();
}

async function main() {
  await serve(handle, {
    port: PORT,
    onListen({ hostname, port }) {
      console.log(`Server running on http://${hostname}:${port}`);
    },
  });
}
