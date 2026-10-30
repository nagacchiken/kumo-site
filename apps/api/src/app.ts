import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => c.text("Hello from kumo-site!"));

app.get("/api/health", (c) => c.json({ status: "ok" }));

export default app;
