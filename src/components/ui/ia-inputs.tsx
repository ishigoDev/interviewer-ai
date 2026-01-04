import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  FieldError,
  FieldErrors,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";

export interface IAInputsProps<T extends FieldValues>
  extends Omit<React.ComponentProps<"input">, "name"> {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T, Path<T>>;
  errors?: FieldErrors<T>;
}

export const IAInputs = <T extends FieldValues>({
  name,
  label,
  register,
  validation,
  errors,
  type,
  ...props
}: IAInputsProps<T>) => {
  const error = errors?.[name] as FieldError | undefined;
  const id = props.id || name;
  const [showPassword, setShowPassword] = React.useState(false);

  const isPassword = type === "password";

  const input = (
    <Input
      id={id}
      type={isPassword ? (showPassword ? "text" : "password") : type}
      {...props}
      {...register(name, validation)}
    />
  );

  return (
    <div>
      <Label htmlFor={id} className="block text-sm font-medium text-white mb-2">
        {label}
      </Label>
      {isPassword ? (
        <div className="relative">
          {input}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      ) : (
        input
      )}
      {error && (
        <p className="text-red-500 text-sm mt-1">{`${error.message}`}</p>
      )}
    </div>
  );
};
IAInputs.displayName = "IAInputs";
