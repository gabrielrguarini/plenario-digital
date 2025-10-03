import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocalDate(date: Date, time: string) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const [hour, minute] = time.split(":").map(Number);
  return new Date(year, month, day, hour, minute);
}
