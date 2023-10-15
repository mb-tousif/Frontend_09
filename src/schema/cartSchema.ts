import { z } from "zod";

const postValidation = z.object({
  body: z.object({
    serviceId: z.string({
        required_error: "Service Id is required",
        }).uuid(),
    status: z
      .enum(["Pending", "Confirmed", "Rejected", "Completed"], {
        required_error: "Status is required",
      })
      .optional(),
    paymentStatus: z
      .enum(["Pending", "Partially Paid", "Paid"], {
        required_error: "Payment Status is required",
      })
      .optional(),
  }),
});

const updateValidation = z.object({
  body: z.object({
    userId: z.string().uuid().optional(),
    serviceId: z.string().uuid().optional(),
    status: z
      .enum(["Pending", "Confirmed", "Rejected", "Completed"], {
        required_error: "Status is required",
      })
      .optional(),
    paymentStatus: z
      .enum(["Pending", "Partially Paid", "Paid"], {
        required_error: "Payment Status is required",
      })
      .optional(),
  }),
});

export const BookingValidation = {
  postValidation,
  updateValidation,
};
