import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { error404 } from "./utils/middleware/404.js";
const app = express();

app.use("/",userRoutes);

app.use(error404);

const server = app.listen(1234, (err) => {
  if (err) {
    console.log("Server Crash", err);
  } else {
    console.log("Server is up and running on port", server.address().port);
  }
});
