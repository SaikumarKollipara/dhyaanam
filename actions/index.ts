"use server";

import { ContactSchema } from "@/schema";
import { ApiResult, Contact } from "@/types";
import { sendEmail } from "@/lib/send-email";

export async function sendUserMessage(data: Contact): Promise<ApiResult> {
  const parseResult = ContactSchema.safeParse(data);
  if (!parseResult.success)
    return { success: false, error: parseResult.error.message };
  const { name, email, phone, message } = parseResult.data;
  try {
    const result = await sendEmail(
      "kkrksaikumar@gmail.com",
      "Message from Dhyaanam user",
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );
    return result;
  } catch (error: any) {
    return { success: false, error: error?.message || "Something went wrong" };
  }
}
