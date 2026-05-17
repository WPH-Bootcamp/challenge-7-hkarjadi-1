"use strict";
// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidString = isValidString;
exports.formatDate = formatDate;
// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid
// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus
// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid
const types_1 = require("./types");
function formatDate(date) {
    const char = ` `;
    const replicated = char.repeat(76);
    const padStart = (value) => value.toString().padStart(2, '0');
    return `${types_1.BLUE}${padStart(date.getDate())}-${padStart(date.getMonth() + 1)}-${date.getFullYear()}\n${replicated}${padStart(date.getHours())}:${padStart(date.getMinutes())}${types_1.RESET}`;
}
function isValidString(input) {
    return typeof input === 'string' && input.trim().length > 0;
}
