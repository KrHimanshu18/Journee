import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;

// User Login
// User Sign up
// New Post
// Delete Post
// Get Feed
// Update like
// Create comment
// Follow user
// Tag user
