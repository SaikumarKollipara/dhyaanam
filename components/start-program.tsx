"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { UserDetails } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserDetailsSchema } from "@/schema";
import { Form, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { sendInterestedProgram } from "@/actions";
import { toast } from "./ui/use-toast";

interface Props {
  programName: string;
}

export default function StartProgram({ programName }: Props) {
  const [open, setOpen] = useState(false);
  const [storedUserDetails, setStoredUserDetails] =
    useState<UserDetails | null>(null);

  const form = useForm<UserDetails>({
    defaultValues: {
      name: (storedUserDetails && storedUserDetails.name) || "",
      phone: (storedUserDetails && storedUserDetails.phone) || "",
    },
    resolver: zodResolver(UserDetailsSchema),
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<UserDetails> = async (data) => {
    const result = await sendInterestedProgram(data, programName);
    if (!result.success)
      return toast({ variant: "destructive", title: result.error });
    toast({
      title: "Got it! We will get back to you soon.",
    });
    setOpen(false);
    localStorage.setItem("userDetails", JSON.stringify(getValues()));
  };

  useEffect(() => {
    const userDetails = JSON.parse(
      localStorage.getItem("userDetails") || "{}"
    ) as UserDetails;
    setStoredUserDetails(userDetails);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className="rounded-full bg-white text-black mb-3 text-xs font-semibold hover:bg-white/90 hover:text-black"
          size="sm"
        >
          Start Program&nbsp;
          <ArrowUpRight className="text-black" size={16} strokeWidth={2} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            Start Program
            <br />({programName})
          </DialogTitle>
          <DialogDescription>
            Please provide the following information to start your program.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <FormField
              name="name"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <Input
                    {...field}
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="phone"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <Input
                    {...field}
                    type="number"
                    placeholder="Phone"
                    autoComplete="off"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                className="bg-app-black hover:bg-app-black/90"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
