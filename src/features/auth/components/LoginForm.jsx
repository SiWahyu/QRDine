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
import { loginSchema } from "../schemas/loginSchema";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useLogin } from "../hooks/useLogin";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export function LoginForm({ className, ...props }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigation = useNavigate();

  const [isView, setIsView] = useState(false);

  const { setAuth } = useAuth();

  const { mutate: login, isPending, error, isError } = useLogin();

  const onSubmit = (data) => {
    login(data, {
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
              <CardTitle>Login to your account</CardTitle>
              <CardDescription>
                Enter your email below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)}>
                <FieldGroup>
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
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Password</FieldLabel>
                      <a
                        href="#"
                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
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
                      {isPending ? "Loading..." : "Login"}
                    </Button>
                    <Button
                      variant="outline"
                      type="button"
                      className="active:scale-[0.99] py-5"
                    >
                      Login with Google
                    </Button>
                    <FieldDescription className="text-center">
                      Don&apos;t have an account?{" "}
                      <Link to="/auth/register">Sign up</Link>
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
