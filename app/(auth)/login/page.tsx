"use client";
import { useForm } from "react-hook-form";

import { FormLoginValue } from "@/common/type";
import ShowError from "@/components/ShowError";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginValue>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>
            <form
              className="flex-col space-y-4 my-4"
              onSubmit={handleSubmit((values) => {
                console.log(values);
              })}
            >
              <Input
                type="text"
                {...register("email", {
                  required: "This field is required !",
                })}
                placeholder="Email"
              />
              <ShowError errors={errors} field="email" />
              <Input
                type="password"
                {...register("password", {
                  required: "This field is required !",
                  pattern: {
                    value: RegExp(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$]/
                    ),
                    message: "Password does not strong",
                  },
                })}
                placeholder="Password"
              />
              <ShowError errors={errors} field="password" />
              <Button type="submit">Login</Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Login;
