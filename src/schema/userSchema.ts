import z from "zod";

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is required",
    }).email(),
    password: z.string({
        required_error: "Password is required",
    }).min(6),
});

export const registerSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(3)
      .max(255),
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(6)
      .max(255),
    role: z.enum(["User", "Admin", "Super Admin"], {
      required_error: "Role is required",
    }),
    contact: z.string({
      required_error: "Contact No is required",
    }),
    address: z.string({
      required_error: "Address is required",
    }),
    imgUrl: z.string().optional(),
  }),
});