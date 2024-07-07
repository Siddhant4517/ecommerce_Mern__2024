import  express from "express";
import { adminOnly } from "../middlewares/auth";
import { deleteProduct, getAdminProducts, getAllCategories, getAllProducts, getLatestProducts, getSingleProduct, newProduct, updateProduct } from "../controllers/product";
import { singleUpload } from "../middlewares/multer";

const app = express.Router();

// Route: Create product if a admin /api/v1/product/new
app.post("/new",adminOnly,singleUpload,newProduct);

// Route: Get the Latest products /api/v1/product/latest
app.get("/latest",getLatestProducts);

// Route: Get all category /api/v1/product/categories
app.get("/categories",getAllCategories);

// Route: Search all products with filter /api/v1/product/all
app.get("/all",getAllProducts);

// Route: Get admin Products /api/v1/product/admin-products
app.get("/admin-products",adminOnly,getAdminProducts);

// Route: Get single product by product-id/update/delete
app.route("/:id").get(getSingleProduct).put(adminOnly,singleUpload,updateProduct).delete(adminOnly,deleteProduct);      

export default app;