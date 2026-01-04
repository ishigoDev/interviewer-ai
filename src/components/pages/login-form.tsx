"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IAInputs } from "../ui/ia-inputs";

type FormData = {
  email: string;
  password: string;
};

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        toast.error("Invalid credentials.");
        return;
      }

      router.replace("dashboard");
    } catch {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[550px]">
      <div className="p-6 rounded-lg w-96 bg-white/5">
        <h1 className="text-2xl font-bold my-4 text-center text-white">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <IAInputs
            name="email"
            label="Email"
            register={register}
            validation={{ required: "Email is required" }}
            errors={errors}
            type="email"
            placeholder="Enter your email"
          />
          <IAInputs
            name="password"
            label="Password"
            register={register}
            validation={{ required: "Password is required" }}
            errors={errors}
            type="password"
            placeholder="Enter your password"
          />
          <Button className="w-full text-white font-bold py-2 px-4 rounded-md" size="lg">
            Login
          </Button>
        </form>
        <p className="text-center text-sm text-white mt-6">Don&apos;t have an account? <a href="/signup" className="text-[#ff9e3d] hover:text-[#ff9e3d]">Sign up</a></p>
      </div>
    </div>
  );
}
