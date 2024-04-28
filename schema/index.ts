import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email("Invalid email"),
  phone: z.string().length(10, { message: "Phone number must be 10 digits" }),
  message: z.string().min(1, { message: "Message is required" }),
});
