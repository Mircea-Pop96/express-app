const express = require("express");
const userRouter = require("./routes/userRoutes");
const taskRouter = require("./routes/taskRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

// ROUTES
app.use("/users", userRouter);
app.use("/tasks", taskRouter);

module.exports = app;
