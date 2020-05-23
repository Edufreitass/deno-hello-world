// import of the module, through the variable serves
import { serve } from "https://deno.land/std@0.52.0/http/server.ts";
// starts the server on the configured port
  const s = serve({ port: 8000 });
  // local address
  console.log("http://localhost:8000/");
  // loop that handles requests
  for await (const req of s) {
      // the server will respond with "Hello World"
    req.respond({ body: "Hello World\n" });
  }