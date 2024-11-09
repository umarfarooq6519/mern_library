import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); // allows us to use JSON data in req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}/`);
});
