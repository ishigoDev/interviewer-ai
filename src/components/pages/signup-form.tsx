"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { IAInputs } from "../ui/ia-inputs";

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        reset();
        const signInRes = await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (signInRes?.error) {
          toast.error("An error occurred during login.");
          return;
        }

        router.replace("dashboard");
      } else {
        const { message } = await res.json();
        toast.error(message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again." + error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] pt-1">
      <div className="p-6 rounded-lg w-96 bg-white/5">
        <h1 className="text-2xl font-bold my-4 text-center text-white">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <IAInputs
            name="name"
            label="Full Name"
            register={register}
            validation={{ required: "Name is required" }}
            errors={errors}
            type="text"
            placeholder="Enter your full name"
          />
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
            Sign Up
          </Button>
        </form>
        <p className="text-center text-sm text-white mt-6">Already have an account? <a href="/login" className="text-[#ff9e3d] hover:text-[#ff9e3d]">Log in</a></p>
      </div>
    </div>
  );
}
