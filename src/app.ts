import express from "express";
import cors from "cors";
import { connectDB } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
import { config } from "dotenv";

import nodeCache from "node-cache";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import orderRoute from "./routes/order.js";
import paymentRoute from "./routes/payment.js";
import dashboardRoute from "./routes/stats.js";
import morgan from "morgan";
import Stripe from "stripe";
import path from "path";

config({
  path: "./.env",
});

const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || "";
const stripeKey = process.env.STRIPE_KEY || "";

connectDB(mongoUri);

export const stripe = new Stripe(stripeKey);
export const myCache = new nodeCache();

// Middleware to handle CORS

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Api Working");
});

// Serve static files from the .well-known directory
app.use("/.well-known", express.static(path.join(__dirname, ".well-known")));

//Using Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/order", orderRoute);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/dashboard", dashboardRoute);

app.use(errorMiddleware);
app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Express is working http://localhost:${port}`);
});
