import { serve } from "./deps.ts";

import { handle } from "./handler.ts";

if (import.meta.main) {
  await main();
}

async function main() {
  const port = parseInt(Deno.env.get("PORT") || "8000");
  await serve(handle, {
    port,
    onListen({ hostname, port }) {
      console.log(`Server running on http://${hostname}:${port}`);
    },
  });
}
