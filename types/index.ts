import { ContactSchema } from "@/schema";
import * as z from "zod";

export type Contact = z.infer<typeof ContactSchema>;

interface SuccessResult {
  success: true;
  data: any;
}

interface FailureResult {
  success: false;
  error: string;
}

export type ApiResult = SuccessResult | FailureResult;
