import Joi from "joi";

export const taskValidator = Joi.object({
    name: Joi.string().required(),
    completed: Joi.boolean().required(),
  });
  