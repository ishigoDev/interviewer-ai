'use client';

import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { IAInputs } from '../ui/ia-inputs';
import { useSignUp, type SignUpFormInputs } from '@/services/auth';

export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormInputs>();

  const { mutate, isPending } = useSignUp(reset);

  const onSubmit = (data: SignUpFormInputs) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] pt-1">
      <div className="p-6 rounded-lg w-96 bg-white/5">
        <h1 className="text-2xl font-bold my-4 text-center text-white">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <IAInputs
            name="name"
            label="Full Name"
            register={register}
            validation={{ required: 'Name is required' }}
            errors={errors}
            type="text"
            placeholder="Enter your full name"
          />
          <IAInputs
            name="email"
            label="Email"
            register={register}
            validation={{ required: 'Email is required' }}
            errors={errors}
            type="email"
            placeholder="Enter your email"
          />
          <IAInputs
            name="password"
            label="Password"
            register={register}
            validation={{ required: 'Password is required' }}
            errors={errors}
            type="password"
            placeholder="Enter your password"
          />
          <Button
            className="w-full text-white font-bold py-2 px-4 rounded-md"
            size="lg"
            disabled={isPending}
          >
            {isPending ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>
        <p className="text-center text-sm text-white mt-6">
          Already have an account?{' '}
          <a href="/login" className="text-[#ff9e3d] hover:text-[#ff9e3d]">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}
