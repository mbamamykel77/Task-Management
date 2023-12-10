import Joi from "joi";

export const taskValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  status: Joi.string().valid("todo", "inProgress", "done").default("todo"),
  dueDate: Joi.date().iso(),
  });
  