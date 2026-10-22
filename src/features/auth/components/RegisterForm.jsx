import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { registerSchema } from "../schemas/registerSchema";
import { useRegister } from "../hooks/useRegister";

export function RegisterForm({ className, ...props }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const navigation = useNavigate();

  const [isView, setIsView] = useState(false);

  const { setAuth } = useAuth();

  const { mutate: registerUser, isPending, error, isError } = useRegister();

  const onSubmit = (data) => {
    registerUser(data, {
      onSuccess: (data) => {
        setAuth(data.token, data.user);

        navigation("/menu");
      },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-3">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card>
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>
                Enter your information below to create your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Full Name</FieldLabel>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      {...register("name")}
                    />
                    <FieldError>{errors.name?.message}</FieldError>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      {...register("email")}
                    />
                    <FieldError>{errors.email?.message}</FieldError>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <div className="relative">
                      <Input
                        id="password"
                        type={isView ? "text" : "password"}
                        placeholder="Enter your password"
                        autoComplete="off"
                        {...register("password")}
                      />
                      {isView ? (
                        <Eye
                          className="absolute right-4 top-2 z-10 size-5 cursor-pointer text-gray-500"
                          onClick={() => {
                            setIsView(!isView);
                          }}
                        />
                      ) : (
                        <EyeOff
                          className="absolute right-4 top-2 z-10 cursor-pointer size-5 text-gray-500"
                          onClick={() => setIsView(!isView)}
                        />
                      )}
                    </div>
                    <FieldError>{errors.password?.message}</FieldError>
                  </Field>
                  {isError && (
                    <p className="text-sm text-destructive">{error.message}</p>
                  )}

                  <Field>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700 hover:scale-[0.98] active:bg-blue-700 active:scale-[0.99] py-5"
                      disabled={isPending}
                    >
                      {isPending ? "Loading..." : "Register"}
                    </Button>
                    <Button
                      variant="outline"
                      type="button"
                      className="active:scale-[0.99] py-5"
                    >
                      Register with Google
                    </Button>
                    <FieldDescription className="text-center">
                      Have an account? <Link to="/auth/login">Sign in</Link>
                    </FieldDescription>
                  </Field>
                </FieldGroup>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
