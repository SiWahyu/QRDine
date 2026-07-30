import { Mail, Phone, UserRound, UtensilsCrossed } from "lucide-react";

import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { useFormContext } from "react-hook-form";

const FormCustomerInformation = ({ tableNumber = 10 }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <form className="mt-6">
      <h2 className="font-semibold text-text">Customer Information</h2>
      <div className="flex flex-col gap-6 mt-4">
        <Field className="w-full" invalid={errors.fullName}>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <InputGroup className="py-5 ">
            <InputGroupInput
              id="fullName"
              className="ml-1.5 placeholder:font-medium"
              placeholder="Full Name"
              {...register("fullName")}
            />
            <InputGroupAddon align="inline-start">
              <UserRound className="size-5" />
            </InputGroupAddon>
          </InputGroup>
          <FieldError>{errors.fullName?.message}</FieldError>
        </Field>
        <Field className="w-full" invalid={errors.phone}>
          <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
          <InputGroup className="py-5 ">
            <InputGroupInput
              id="phone"
              className="ml-1.5 placeholder:font-medium"
              placeholder="Phone Number"
              type="tel"
              {...register("phone")}
            />
            <InputGroupAddon align="inline-start">
              <Phone className="size-5" />
            </InputGroupAddon>
          </InputGroup>
          <FieldError>{errors.phone?.message}</FieldError>
        </Field>
        <Field className="w-full" invalid={errors.email}>
          <FieldLabel htmlFor="email">Send Receipt to Email</FieldLabel>
          <InputGroup className="py-5 ">
            <InputGroupInput
              id="email"
              className="ml-1.5 placeholder:font-medium"
              placeholder="Email"
              type="email"
              {...register("email")}
            />
            <InputGroupAddon align="inline-start">
              <Mail className="size-5" />
            </InputGroupAddon>
          </InputGroup>
          <FieldError>{errors.email?.message}</FieldError>
        </Field>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium">Table Number*</span>
          <div className="flex gap-2.5 p-3 border rounded-xl bg-neutral-100">
            <UtensilsCrossed strokeWidth={1.5} className="size-5" />
            <span className="text-sm font-medium text-muted-foreground">
              {tableNumber}
            </span>
          </div>
        </div>
      </div>
    </form>
  );
};
export default FormCustomerInformation;
