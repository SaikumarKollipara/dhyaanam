import { ApiResult } from "@/types";
import nodemailer from "nodemailer";

export async function sendEmail(
  to: string,
  subject: string,
  message: string
): Promise<ApiResult> {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const result = await transporter.sendMail({
      from: process.env.EMAIL,
      to,
      subject,
      text: message,
    });
    if (result.rejected.length > 0)
      throw new Error("Error while sending email");
    return { success: true, data: result };
  } catch (error: any) {
    return { success: false, error: error?.message || "Something went wrong" };
  }
}
