import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number, currency: string = "INR"): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date)
}

export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    food: "bg-orange-500",
    transport: "bg-blue-500",
    shopping: "bg-purple-500",
    utilities: "bg-green-500",
    entertainment: "bg-pink-500",
    healthcare: "bg-red-500",
    education: "bg-indigo-500",
    other: "bg-gray-500",
  }
  
  return colors[category.toLowerCase()] || colors.other
}
