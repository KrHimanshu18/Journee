import { Hono } from "hono";
import { cors } from "hono/cors";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.use("*", cors());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/test-prisma", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
      const user = await prisma.user.findFirst();
      return c.json({ message: "Prisma works", user });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return c.json({ error: errorMessage }, 500);
    }
  } catch {
    console.error("Connection to Prisma Client failed", Error);

    // returned message
    return c.json(
      { message: "Internal server error. Please try again later." },
      500
    );
  }
});

export default app;
