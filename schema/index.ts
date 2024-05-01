import { z } from "zod";

export const ContactSchema = z
  .object({
    name: z.string().min(1, { message: "Name is required" }),
    message: z.string().min(1, { message: "Message is required" }),
    email: z.string().email().optional().or(z.literal("")),
    phone: z
      .string()
      .length(10, { message: "Invalid phone number" })
      .optional()
      .or(z.literal("")),
  })
  .refine((data) => data.email || data.phone, {
    message: "Please provide either email or phone number",
    path: ["email"],
  });

export const UserDetailsSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  phone: z.string().length(10, { message: "Invalid phone number" }),
});
