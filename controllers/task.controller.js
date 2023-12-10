import Task from "../models/tasks.model.js";
import { taskValidator } from "../validators/task.validator.js";

// create task
const createTask = async (req, res) => {
  const { error } = taskValidator.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const existingTask = await Task.findOne({ title: req.body.title });

  if (existingTask) {
    return res.status(404).json({
      status: "failed",
      message: "Task already exists",
    });
  }

  const { title, description, status, dueDate } = req.body;

  try {
    const task = new Task({
      title,
      description,
      status,
      dueDate,
    });

    await task.save();

    res.status(200).json({
      status: "Success",
      message: "Task created",
      data: task,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "failed", message: "Internal server error" });
  }
};


// get all task
const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find();

    res.status(200).json({
      status: "success",
      message: "Task successfully retrieved",
      data: task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
};


// get single task
const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);
    if (!task) {
      return res.status(400).json({
        status: "failed",
        message: "Task not found",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Task successfully retrieved",
      data: task,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
};


// update task
const updateTask = async (req, res) => {
  const { error } = taskValidator.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  const existingTask = await Task.findOne({ title: req.body.title });

  if (existingTask) {
    return res.status(200).json({
      status: "failed",
      message: "Task already exists",
    });
  }
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (task) {
      return res.status(200).json({
        status: "success",
        message: "Task successfully updated",
        data: task,
      });
    }

    if (!task) {
      return res.status(404).json({
        status: "failed",
        message: "Task not found",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
};


// delete task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({
        status: "failed",
        message: "Task not found",
      });
    }
    return res.status(200).json({
      status: "success",
      message: "Task successfully deleted",
      data: task,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "failed",
      message: "Internal server error",
    });
  }
};

export { getAllTasks, createTask, getSingleTask, updateTask, deleteTask };
