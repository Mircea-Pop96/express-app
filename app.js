const express = require("express");
const userRouter = require("./routes/userRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// ROUTES
app.use("/users", userRouter);

module.exports = app;
