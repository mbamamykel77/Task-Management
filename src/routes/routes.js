import express from "express";

const router = express.Router();

import { getAllTasks, createTask, getSingleTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import userController from "../controllers/user.signup.js";
import userloginController from "../controllers/user.login.js";


router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).put(updateTask).delete(deleteTask);

// auth
router.post("/signup", userController.signup);
router.post("/signin", userloginController.signin);


export {router};
