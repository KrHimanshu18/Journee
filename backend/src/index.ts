import { Hono } from "hono";
import { cors } from "hono/cors";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import bcrypt from "bcryptjs";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
  };
}>();

app.use("*", cors());

// INTEGRATED
// WORKING : VERIFIED ON POSTMAN
// User Login
app.get("/login", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const { username, password } = c.req.query();

    // Check if the input fields are missing
    if (!username?.trim() || !password?.trim()) {
      return c.json({ message: "Required field is missing" }, 400);
    }

    try {
      const user = await prisma.user.findFirst({
        where: { username },
        select: {
          id: true,
          username: true,
          email: true,
          password: true,
          bio: true,
          followers: true,
          following: true,
          posts: true,
        },
      });

      if (!user) {
        return c.json({ message: "User not found" }, 404);
      }

      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (!isPasswordCorrect) {
        return c.json({ message: "Authentication failed" }, 401);
      }

      const { password: _, ...userWithoutPassword } = user;

      console.log(userWithoutPassword);
      return c.json(
        {
          message: "Logged in Successfully",
          user: userWithoutPassword,
        },
        200
      );
    } catch (error: unknown) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return c.json(
        {
          message: "Login failed",
          error: errorMessage,
        },
        500
      );
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

// INTEGRATED
// WORKING : VERIFIED ON POSTMAN
// {
//   "username":"Kr_Himanshu",
//   "email":"krhimanshu@gmail.com",
//   "password":"020812"
// }
// User Sign up
app.post("/signup", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    // Input validation based on schema
    if (
      !body.username?.trim() ||
      !body.email?.trim() ||
      !body.password?.trim()
    ) {
      return c.json({ message: "Required field is missing" }, 400);
    }

    if (
      body.username.length > 50 ||
      body.password.length < 4 ||
      !body.email.includes("@")
    ) {
      return c.json({ message: "Invalid input format" }, 400);
    }

    try {
      const userExists = await prisma.user.findUnique({
        where: { username: body.username },
      });
      if (userExists) {
        return c.json({ message: "Username already taken" }, 409);
      }

      const emailExists = await prisma.user.findUnique({
        where: { email: body.email },
      });
      if (emailExists) {
        return c.json({ message: "Email already taken" }, 409);
      }

      const hashedPassword = await bcrypt.hash(body.password, 10);
      const user = await prisma.user.create({
        data: {
          username: body.username,
          email: body.email,
          password: hashedPassword,
          bio: body.bio || null,
        },
      });

      // Remove sensitive data from response
      const { password: _, ...userWithoutPassword } = user;

      console.log("New User : ", userWithoutPassword);
      return c.json(
        {
          message: "User created successfully",
          user: userWithoutPassword,
        },
        201
      );
    } catch (error: unknown) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return c.json(
        {
          message: "Failed to create the user",
          error: errorMessage,
        },
        500
      );
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

// INTEGRATED
//  WORKING : VERIFIED ON POSTMAN
// {
//   "username":"Kr_Himanshu",
//   "content":"This is the demo post"
// }
// New Post
app.post("/newPost", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    // Input validation
    if (!body.username?.trim() || !body.content?.trim()) {
      return c.json({ message: "Required field is missing" }, 400);
    }
    if (body.content.length > 500) {
      return c.json({ message: "Content too long" }, 400);
    }

    try {
      console.log(body);
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { username: body.username },
      });

      if (!user) {
        return c.json({ message: "User not found" }, 404);
      }

      // If user exists, create the post
      const post = await prisma.post.create({
        data: {
          content: body.content,
          author: {
            connect: { username: body.username },
          },
        },
      });

      console.log("Created Post : ", post);
      return c.json(
        {
          message: "Post created successfully",
          post,
        },
        201
      );
    } catch (error: unknown) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return c.json(
        {
          message: "Failed to create post",
          error: errorMessage,
        },
        500
      );
    }
  } catch {}
});

// INTEGRATED
// WORKING : VERIFIED ON POSTMAN
// Delete Post
app.delete("/deletePost/:postId", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const { postId } = c.req.param(); // Get postId from URL parameter
    const body = await c.req.json(); // Get username from body for authorization

    // Input validation
    if (!body.username?.trim()) {
      return c.json({ message: "Username is required" }, 400);
    }
    if (!postId) {
      return c.json({ message: "Post ID is required" }, 400);
    }

    try {
      // Check if the post exists and belongs to the user
      const post = await prisma.post.findUnique({
        where: { id: postId },
        select: {
          id: true,
          authorId: true, // Username of the author
        },
      });

      if (!post) {
        return c.json({ message: "Post not found" }, 404);
      }

      // Verify the requesting user is the author
      if (post.authorId !== body.username) {
        return c.json(
          { message: "Unauthorized: You can only delete your own posts" },
          403
        );
      }

      // Delete the post
      // Due to onDelete: Cascade in Comment and Liked models, related records are automatically deleted
      await prisma.post.delete({
        where: { id: postId },
      });

      console.log(`Deleted Post with ID: ${postId}`);
      return c.json(
        {
          message: "Post deleted successfully",
          postId,
        },
        200
      );
    } catch (error: unknown) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return c.json(
        {
          message: "Failed to delete post",
          error: errorMessage,
        },
        500
      );
    }
  } catch {}
});

// INTEGRATED
// WORKING : VERIFIED ON POSTMAN
// Get Feed
app.get("/getFeed", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const { username } = c.req.query(); // Get username from query parameters

    // Input validation
    if (!username?.trim()) {
      return c.json({ message: "Username is required" }, 400);
    }

    try {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { username },
      });

      if (!user) {
        return c.json({ message: "User not found" }, 404);
      }

      // Get the list of users this user is following
      const following = await prisma.follow.findMany({
        where: { followerId: username }, // Current user is the follower
        select: { followingId: true }, // Get the usernames of followed users
      });

      const followedUsernames = following.map((f) => f.followingId);

      // If the user isn't following anyone, return an empty feed
      if (followedUsernames.length === 0) {
        return c.json(
          {
            message: "Feed fetched successfully",
            posts: [],
          },
          200
        );
      }

      // Fetch all posts by the followed users
      const posts = await prisma.post.findMany({
        where: {
          authorId: { in: followedUsernames }, // Posts where authorId is in the list of followed usernames
        },
        orderBy: {
          createdAt: "desc", // Sort by most recent first
        },
        select: {
          id: true,
          content: true,
          createdAt: true,
          authorId: true,
          author: {
            select: {
              username: true,
              bio: true, // Optional: include author details
            },
          },
          likes: {
            select: {
              userId: true, // Optional: include who liked the post
            },
          },
          comments: {
            select: {
              id: true,
              comment: true,
              createdAt: true,
              userId: true,
            },
          },
        },
      });

      console.log(`Fetched feed for ${username}: ${posts.length} posts`);
      return c.json(
        {
          message: "Feed fetched successfully",
          posts,
        },
        200
      );
    } catch (error: unknown) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return c.json(
        {
          message: "Failed to fetch feed",
          error: errorMessage,
        },
        500
      );
    }
  } catch {}
});

// INTEGRATED
// WORKING : VERIFIED ON POSTMAN
// Get Post
app.get("/getPost", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const { username } = c.req.query(); // Get username from query parameters

    // Input validation
    if (!username?.trim()) {
      return c.json({ message: "Username is required" }, 400);
    }

    try {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { username },
      });

      if (!user) {
        return c.json({ message: "User not found" }, 404);
      }

      // Fetch all posts by the given username
      const posts = await prisma.post.findMany({
        where: {
          authorId: username, // Filter posts where authorId matches the given username
        },
        orderBy: {
          createdAt: "desc", // Sort by most recent first
        },
        select: {
          id: true,
          content: true,
          createdAt: true,
          authorId: true,
          author: {
            select: {
              username: true,
              bio: true, // Optional: include author details
            },
          },
          likes: {
            select: {
              userId: true, // Optional: include who liked the post
            },
          },
          comments: {
            select: {
              id: true,
              comment: true,
              createdAt: true,
              userId: true,
            },
          },
        },
      });

      console.log(`Fetched posts for ${username}: ${posts.length} posts`);
      return c.json(
        {
          message: "Posts fetched successfully",
          posts,
        },
        200
      );
    } catch (error: unknown) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return c.json(
        {
          message: "Failed to fetch posts",
          error: errorMessage,
        },
        500
      );
    }
  } catch {}
});

// INTEGRATED
// WORKING : VERIFIED ON POSTMAN
// Update like
app.post("/toggleLike", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json(); // Expect username and postId in the body

    // Input validation
    if (!body.username?.trim()) {
      return c.json({ message: "Username is required" }, 400);
    }
    if (!body.postId?.trim()) {
      return c.json({ message: "Post ID is required" }, 400);
    }

    const { username, postId } = body;

    try {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { username },
      });
      if (!user) {
        return c.json({ message: "User not found" }, 404);
      }

      // Check if the post exists
      const post = await prisma.post.findUnique({
        where: { id: postId },
      });
      if (!post) {
        return c.json({ message: "Post not found" }, 404);
      }

      // Check if the user has already liked the post
      const existingLike = await prisma.liked.findUnique({
        where: {
          userId_postId: { userId: username, postId }, // Composite unique key
        },
      });

      if (existingLike) {
        // If like exists, remove it
        await prisma.liked.delete({
          where: {
            userId_postId: { userId: username, postId },
          },
        });
        console.log(`User ${username} unliked post ${postId}`);
        return c.json(
          {
            message: "Post unliked successfully",
            postId,
            liked: false,
          },
          200
        );
      } else {
        // If no like exists, create it
        await prisma.liked.create({
          data: {
            userId: username,
            postId,
          },
        });
        console.log(`User ${username} liked post ${postId}`);
        return c.json(
          {
            message: "Post liked successfully",
            postId,
            liked: true,
          },
          200
        );
      }
    } catch (error: unknown) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return c.json(
        {
          message: "Failed to toggle like",
          error: errorMessage,
        },
        500
      );
    }
  } catch {}
});

// INTEGRATED
// WORKING : VERIFIED ON POSTMAN
// {
//   "username":"Kr_Himanshu",
//   "postId":"4907f91c-1197-4e2d-ad92-1a9bfe58ec24",
//   "comment":"This is the demo comment"
// }
// Create comment
app.post("/createComment", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json(); // Expect username, postId, and comment in the body

    // Input validation
    if (!body.username?.trim()) {
      return c.json({ message: "Username is required" }, 400);
    }
    if (!body.postId?.trim()) {
      return c.json({ message: "Post ID is required" }, 400);
    }
    if (!body.comment?.trim()) {
      return c.json({ message: "Comment content is required" }, 400);
    }
    if (body.comment.length > 500) {
      // Example max length
      return c.json({ message: "Comment is too long" }, 400);
    }

    const { username, postId, comment } = body;

    try {
      // Check if the user exists
      const user = await prisma.user.findUnique({
        where: { username },
      });
      if (!user) {
        return c.json({ message: "User not found" }, 404);
      }

      // Check if the post exists
      const post = await prisma.post.findUnique({
        where: { id: postId },
      });
      if (!post) {
        return c.json({ message: "Post not found" }, 404);
      }

      // Create the new comment
      const newComment = await prisma.comment.create({
        data: {
          comment, // Content of the comment
          userId: username, // Link to the author
          postId, // Link to the post
          // createdAt is automatically set by @default(now())
          // id is automatically set by @default(uuid())
        },
      });

      console.log(
        `User ${username} commented on post ${postId}: ${newComment.id}`
      );
      return c.json(
        {
          message: "Comment created successfully",
          comment: {
            id: newComment.id,
            comment: newComment.comment,
            createdAt: newComment.createdAt,
            userId: newComment.userId,
            postId: newComment.postId,
          },
        },
        201
      );
    } catch (error: unknown) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return c.json(
        {
          message: "Failed to create comment",
          error: errorMessage,
        },
        500
      );
    }
  } catch {}
});

// INTEGRATED
//  WORKING : VERIFIED ON POSTMAN
// {
//   "username":"Kr_Himanshu",
//   "targetUsername":"Kr_Ankit"
// }
// Follow user
app.post("/toggleFollow", async (c) => {
  try {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json(); // Expect username (current user) and targetUsername (user to follow/unfollow)

    // Input validation
    if (!body.username?.trim()) {
      return c.json({ message: "Username is required" }, 400);
    }
    if (!body.targetUsername?.trim()) {
      return c.json({ message: "Target username is required" }, 400);
    }
    if (body.username === body.targetUsername) {
      return c.json({ message: "You cannot follow yourself" }, 400);
    }

    const { username, targetUsername } = body;

    try {
      // Check if both users exist
      const currentUser = await prisma.user.findUnique({
        where: { username },
      });
      if (!currentUser) {
        return c.json({ message: "Current user not found" }, 404);
      }

      const targetUser = await prisma.user.findUnique({
        where: { username: targetUsername },
      });
      if (!targetUser) {
        return c.json({ message: "Target user not found" }, 404);
      }

      // Check if the current user is already following the target user
      const existingFollow = await prisma.follow.findUnique({
        where: {
          followerId_followingId: {
            followerId: username,
            followingId: targetUsername,
          }, // Composite unique key
        },
      });

      if (existingFollow) {
        // If follow exists, remove it (unfollow)
        await prisma.follow.delete({
          where: {
            followerId_followingId: {
              followerId: username,
              followingId: targetUsername,
            },
          },
        });
        console.log(`User ${username} unfollowed ${targetUsername}`);
        return c.json(
          {
            message: "Unfollowed successfully",
            targetUsername,
            following: false,
          },
          200
        );
      } else {
        // If no follow exists, create it (follow)
        await prisma.follow.create({
          data: {
            followerId: username,
            followingId: targetUsername,
          },
        });
        console.log(`User ${username} followed ${targetUsername}`);
        return c.json(
          {
            message: "Followed successfully",
            targetUsername,
            following: true,
          },
          200
        );
      }
    } catch (error: unknown) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      return c.json(
        {
          message: "Failed to toggle follow",
          error: errorMessage,
        },
        500
      );
    }
  } catch {}
});

// Tag user

export default app;
