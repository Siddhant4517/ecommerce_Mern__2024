import  express from "express";
import { deleteUser, getAllUsers, getUser, newUser } from "../controllers/user";
import { adminOnly } from "../middlewares/auth";

const app = express.Router();

// route - /api/v1/user/new
app.post("/new",newUser);

// route - /api/v1/user/all
app.get("/all",adminOnly,getAllUsers);

// route - /api/v1/user/dynamicId
app.get("/:id",getUser);
app.delete("/:id",adminOnly,deleteUser);

export default app;