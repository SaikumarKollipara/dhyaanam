import { ContactSchema, UserDetailsSchema } from "@/schema";
import * as z from "zod";

export type Contact = z.infer<typeof ContactSchema>;

export type UserDetails = z.infer<typeof UserDetailsSchema>;

interface SuccessResult<T> {
  success: true;
  data: T;
}

interface FailureResult {
  success: false;
  error: string;
}

export type ApiResult<T = any> = SuccessResult<T> | FailureResult;
