import { useMutation } from '@tanstack/react-query';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// Types
export interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
}

export type LoginFormInputs = {
  email: string;
  password: string;
};

// useSignUp hook
export const useSignUp = (reset: () => void) => {
  const router = useRouter();
  return useMutation<any, Error, SignUpFormInputs>({
    mutationFn: async (data) => {
      const response = await axios.post('/api/user/signup', data);
      return response.data;
    },
    onSuccess: async (_, variables) => {
      reset();
      const signInRes = await signIn('credentials', {
        email: variables.email,
        password: variables.password,
        redirect: false,
      });

      if (signInRes?.error) {
        toast.error(signInRes.error || 'An error occurred during login.');
        return;
      }

      if (signInRes?.ok) {
        router.replace('dashboard');
      }
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message || error.message || 'Sign up failed';
      toast.error(message);
    },
  });
};

// useLogin hook
export const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (data: LoginFormInputs) => {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.error) {
        throw new Error(
          'Invalid credentials. Please Check your email and password.'
        );
      }

      return res;
    },
    onSuccess: () => {
      router.replace('dashboard');
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
