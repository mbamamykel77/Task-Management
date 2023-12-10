import { Schema, model } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ["todo", "inProgress", "done"],
      default: "todo",
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Task", taskSchema);
