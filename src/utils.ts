// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid

// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid

import { RED, GREEN, YELLOW, PURPLE, PINK, BLUE, RESET } from './types';

function formatDate(date: Date): string {
  const char: string = ` `;
  const replicated: string = char.repeat(76);
  const padStart = (value: number): string => value.toString().padStart(2, '0');
  return `${BLUE}${padStart(date.getDate())}-${padStart(
    date.getMonth() + 1
  )}-${date.getFullYear()}\n${replicated}${padStart(
    date.getHours()
  )}:${padStart(date.getMinutes())}${RESET}`;
}

function isValidString(input: unknown): input is string {
  return typeof input === 'string' && input.trim().length > 0;
}

export { isValidString, formatDate };
