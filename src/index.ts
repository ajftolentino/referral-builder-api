import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { ReferralRoutes } from "./routes";

dotenv.config();

const app: Application = express();
const PORT: string | number = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

const connectDb = async () => {
  // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
  await mongoose
    .connect(process.env.MONGO_DB_CONNECTION_STRING as string)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.error(err));
};

// Connect to MongoDB Atlas
connectDb();

// Routes
app.use("/api", ReferralRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
