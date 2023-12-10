import express from "express";

const router = express.Router();

import { getAllTasks, createTask, getSingleTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import userController from "../controllers/user.signup.js";
import userloginController from "../controllers/user.login.js";
import authUser from "../middleware/auth.user.js"


router.route("/").get(authUser, getAllTasks).post(authUser, createTask);
router.route("/:id").get(authUser, getSingleTask).put(authUser, updateTask).delete(authUser, deleteTask);

// auth
router.post("/signup", userController.signup);
router.post("/signin", userloginController.signin);


export {router};
