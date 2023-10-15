import { z } from "zod";

const postValidation = z.object({
  body: z.object({
    email: z.string({
        required_error: "email is required",
    }).email(),
  }),
});

const updateValidation = z.object({
  body: z.object({
    email: z.string({
        required_error: "email is required",
    }).email()
  }),
});

export const SubscribeValidation = {
  postValidation,
  updateValidation,
};
