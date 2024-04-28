"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { ContactSchema } from "@/schema";
import { Contact } from "@/types";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function ContactForm() {
  const form = useForm<Contact>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const { control, handleSubmit } = form;

  const onSumbit: SubmitHandler<Contact> = async (data) => {
    console.log({ data });
  };

  return (
    <section>
      <Form {...form}>
        <form
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          onSubmit={handleSubmit(onSumbit)}
        >
          <div className="flex flex-col gap-8 justify-center bg-app-secondary !rounded-app-md p-10 lg:row-span-4 lg:py-5 xl:px-20">
            <h2 className="text-app-black text-4xl font-black">
              Leave us a message here
            </h2>
            <p className="leading-relaxed">
              We will always listen you and we will definitely get back to you
              if you have any queries.
            </p>
          </div>
          <FormField
            name="name"
            control={control}
            render={({ field }) => (
              <FormItem className="h-full flex flex-col">
                <Input
                  className="h-full border-none bg-app-gray !rounded-app-md px-4 py-8"
                  type="text"
                  placeholder="Name"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="message"
            control={control}
            render={({ field }) => (
              <FormItem className="row-span-3 h-full flex flex-col">
                <Textarea
                  className="min-h-[200px] h-full border-none bg-app-gray !rounded-app-md px-4 py-8 resize-none"
                  placeholder="Message"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={control}
            render={({ field }) => (
              <FormItem className="h-full flex flex-col">
                <Input
                  className="h-full border-none bg-app-gray !rounded-app-md px-4 py-8"
                  type="email"
                  placeholder="Email"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={control}
            render={({ field }) => (
              <FormItem className="h-full flex flex-col">
                <Input
                  className="h-full border-none bg-app-gray !rounded-app-md px-4 py-8"
                  type="number"
                  placeholder="Phone"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="h-full w-full bg-app-black !rounded-app-md py-6 hover:bg-app-black/90 lg:col-span-2"
            type="submit"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </section>
  );
}
