import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import routes from "./routes/index.js";
import loggerMiddleware from "./middleware/logger.middleware.js";
import notFoundMiddleware from "./middleware/notFound.middleware.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cors from "cors";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Enable CORS
app.use(cors());

// Built-in Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve uploaded images
app.use(
  "/uploads",
  express.static(path.join(__dirname, "../uploads"))
);

// Custom Middleware
app.use(loggerMiddleware);

// Routes
app.use("/api", routes);

// 404 Middleware
app.use(notFoundMiddleware);

// Error Middleware
app.use(errorMiddleware);

export default app;