import { serve } from "@hono/node-server";
import app from "./app.ts";

// Lambda Web Functions sets AWS_LAMBDA_HTTP_ENDPOINT to "host:port".
// Locally, fall back to 127.0.0.1:3000.
const [hostname = "127.0.0.1", portStr = "3000"] = (
  process.env.AWS_LAMBDA_HTTP_ENDPOINT ?? "127.0.0.1:3000"
).split(":");
const port = Number(portStr);

serve({ fetch: app.fetch, hostname, port }, (info) => {
  console.log(`Listening on http://${info.address}:${info.port}`);
});
