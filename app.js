import express from "express";
import mongoose from "mongoose";
import { router as taskRoute } from "./routes/routes.js";
import "./config/connect.js";

const app = express();
const port = Number(process.env.PORT) || 3000;

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Task Manager App");
});
app.use("/task", taskRoute);


// mongodb connection
mongoose
  .connect(process.env.MongoURI)
  .then(() => console.log("Database Connection Established"))
  .catch((e) => console.log(e.message));
console.log(process.env.MongoURI);

app.listen(port, () => console.log(`server is listening on Port ${port}...`));
