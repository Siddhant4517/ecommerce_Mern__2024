import mongoose, { Document, Schema, model } from "mongoose";

// Define the interface extending Document
interface MyDocument extends Document {
  name: string;
  photo: string;
  price: number;
  stock: number;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema
const schema = new Schema<MyDocument>(
  {
    name: {
      type: String,
      required: [true, "Please enter Name"],
    },
    photo: {
      type: String,
      required: [true, "Please enter Photo"],
    },
    price: {
      type: Number,
      required: [true, "Please enter Price"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter Stock"],
    },
    category: {
      type: String,
      required: [true, "Please enter Category"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Define the model
const Product = model<MyDocument>("Product", schema);

// Export the model
export { Product, MyDocument };
