"use server";

import { ApiResult, Contact, UserDetails } from "@/types";
import { sendEmail } from "@/lib/send-email";

export async function sendUserMessage(data: Contact): Promise<ApiResult> {
  const { name, email, phone, message } = data;
  try {
    const result = await sendEmail(
      "kkrksaikumar@gmail.com",
      "Dhyaanam: Message from a user",
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    );
    return result;
  } catch (error: any) {
    return { success: false, error: error?.message || "Something went wrong" };
  }
}

export async function sendInterestedProgram(
  user: UserDetails,
  program: string
): Promise<ApiResult> {
  const { name, phone } = user;
  try {
    const result = await sendEmail(
      "kkrksaikumar@gmail.com",
      "Dhyaanam: User is interested in a program",
      `Name: ${name}\nPhone: ${phone}\nProgram: ${program}`
    );
    return result;
  } catch (error: any) {
    return { success: false, error: error?.message || "Something went wrong" };
  }
}
