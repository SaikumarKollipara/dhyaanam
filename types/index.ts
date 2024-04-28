import { ContactSchema } from "@/schema";
import * as z from "zod";

export type Contact = z.infer<typeof ContactSchema>;
