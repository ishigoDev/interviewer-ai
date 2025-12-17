import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function safeDecode(str: string): string {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    console.warn("Decoding error:", e);
    return str;
  }
}