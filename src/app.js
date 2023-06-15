// import dotenv config
import "dotenv/config";
// import express
import express from "express";
// import cors
import cors from "cors";

// import mongoDB connection
import { dbConnect } from "./database/mongo.js";

// import book routes
import bookRoutes from "./routes/book.routes.js";
// import user routes
import userRoutes from "./routes/user.routes.js";
// import loan routes
import loanRoutes from "./routes/loan.routes.js";

// create express app
const app = express();

// use middlewares
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// use routes
app.use("/api", bookRoutes).use("/api", userRoutes).use("/api", loanRoutes);

// if endpoint doesnt exist, send an error message
app.use((req, res, next) => {
  res.status(404).json({ message: "endpoint not found" });
});

// put server to listen
app.listen(PORT, () => console.log("Server running on port: ", PORT));
// connect to mongoDB
dbConnect();
