// import { describe, expect, test } from "vitest";
// import { Stripe } from "./index.js";
// import { defineSchema } from "convex/server";
// import { components, initConvexTest } from "./setup.test.js";

// // The schema for the tests
// const schema = defineSchema({});

// describe("client tests", () => {
//   test("should be able to use client", async () => {
//     const t = initConvexTest(schema);
//     const stripe = new Stripe(components.stripe);
//     const targetId = "test-subject-1";
//     await t.run(async (ctx) => {
//       await stripe.add(ctx, {
//         text: "My first comment",
//         targetId: targetId,
//         userId: "user1",
//       });
//       const comments = await stripe.list(ctx, targetId);
//       expect(comments).toHaveLength(1);
//       expect(comments[0].text).toBe("My first comment");
//     });
//   });
// });
