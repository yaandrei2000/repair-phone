import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Форматирует номер телефона в формат +7 (XXX) XXX-XX-XX
 * @param value - Строка с номером телефона
 * @returns Отформатированный номер телефона
 */
export function formatPhoneNumber(value: string): string {
  // Удаляем все нецифровые символы
  const numbers = value.replace(/\D/g, "");

  // Если номер начинается с 8, заменяем на 7
  let formatted = numbers.startsWith("8") ? "7" + numbers.slice(1) : numbers;

  // Если номер не начинается с 7, добавляем 7
  if (formatted && !formatted.startsWith("7")) {
    formatted = "7" + formatted;
  }

  // Ограничиваем длину до 11 цифр (7 + 10 цифр)
  formatted = formatted.slice(0, 11);

  // Форматируем в формат +7 (XXX) XXX-XX-XX
  if (formatted.length === 0) return "";
  if (formatted.length <= 1) return `+${formatted}`;
  if (formatted.length <= 4)
    return `+${formatted.slice(0, 1)} (${formatted.slice(1)}`;
  if (formatted.length <= 7)
    return `+${formatted.slice(0, 1)} (${formatted.slice(1, 4)}) ${formatted.slice(4)}`;
  if (formatted.length <= 9)
    return `+${formatted.slice(0, 1)} (${formatted.slice(1, 4)}) ${formatted.slice(4, 7)}-${formatted.slice(7)}`;
  return `+${formatted.slice(0, 1)} (${formatted.slice(1, 4)}) ${formatted.slice(4, 7)}-${formatted.slice(7, 9)}-${formatted.slice(9, 11)}`;
}

/**
 * Валидирует номер телефона в формате +7 (XXX) XXX-XX-XX
 * @param phone - Номер телефона для валидации
 * @returns true если номер валиден, иначе false
 */
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
  return phoneRegex.test(phone);
}
