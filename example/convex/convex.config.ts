import { defineApp } from "convex/server";
import stripe from "@convex/stripe/convex.config.js";

const app = defineApp();
app.use(stripe);

export default app;
