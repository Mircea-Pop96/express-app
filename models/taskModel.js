const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "A task must have a name"],
      trim: true,
      maxlength: [40, "A task name must have less or equal than 40 characters"],
      minLength: [10, "A task name must have more or equal than 10 characters"],
    },
    description: {
      type: String,
      required: [true, "A task must have a description"],
      trim: true,
      maxlength: [
        100,
        "A task name must have less or equal than 40 characters",
      ],
      minLength: [10, "A task name must have more or equal than 10 characters"],
    },
    status: {
      type: String,
      enum: ["Pending", "Completed", "Cancel"],
      default: "Pending",
    },
    file: {
      filename: String,
      path: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Task must belong to a user"],
    },
    // createdAt: {
    //   type: Date,
    //   default: Date.now(),
    // },
    // updatedAt: {
    //   type: Date,
    //   default: Date.now(),
    // },
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
