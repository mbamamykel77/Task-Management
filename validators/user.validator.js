// validator here
import Joi from "joi"

export const signupValidator = Joi.object({
  fullName: Joi.string().required().messages({
    'any.required': 'fullName is required',
  }),
  email: Joi.string()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required()
    .messages({
      "string.pattern.base": "Email is not a valid email format/address",
    }),
    password: Joi.string()
    .regex(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain only letters and numbers, and be at least 6 characters long",
    })
}).strict()


// login validator
export const signinValidator = Joi.object({
  email: Joi.string()
  .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
  .required()
  .messages({
    "string.pattern.base": "Email is not a valid email address",
  }),
password: Joi.string().required(),
}).strict();