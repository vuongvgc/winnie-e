"use client";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  userName: z
    .string()
    .min(5, {
      message: "userName at least 5 character",
    })
    .max(59, {
      message: "userName maximum 59 character",
    }),
});
const SignIn = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
    },
  });

  const onSignIn = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Sign In</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSignIn)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>User Name</FormLabel>
                        <FormControl>
                          <Input placeholder="UserName" {...field} />
                        </FormControl>
                        <FormDescription>
                          This is your public display name.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default SignIn;
