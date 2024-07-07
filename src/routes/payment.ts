import express from "express";
import { adminOnly } from "../middlewares/auth";
import {
  allCoupons,
  applyDiscount,
  createPaymentIntent,
  deleteCoupon,
  newCoupon,
} from "../controllers/payment";

const app = express.Router();

// route - /api/v1/payment/create
app.post("/create", createPaymentIntent);

// route - /api/v1/payment/discount
app.get("/discount", applyDiscount);

// route - /api/v1/payment/new
app.post("/new", adminOnly, newCoupon);

// route - /api/v1/payment/coupon/all
app.get("/coupon/all", adminOnly, allCoupons);

// route - /api/v1/payment/coupon/delete
app.delete("/coupon/:id", adminOnly, deleteCoupon);

export default app;
