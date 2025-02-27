import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// User Login
// User Sign up
// New Post
// Delete Post
// Get Feed
// Update like
// Create comment
// Follow user
// Tag user

export default app;
