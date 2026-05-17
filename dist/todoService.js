"use strict";
// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.markTodo = markTodo;
exports.deleteTodo = deleteTodo;
exports.listTodo = listTodo;
exports.searchTodo = searchTodo;
// TODO: Import fungsi storage untuk baca/tulis file
// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active
// TODO: Buat fungsi untuk menandai To-Do sebagai selesai
// - Cari To-Do berdasarkan id
// - Ubah statusnya menjadi completed
// - Handle kasus jika id tidak ditemukan
// TODO: Buat fungsi untuk menghapus To-Do
// - Filter To-Do berdasarkan id
// - Handle kasus jika id tidak ditemukan
// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do
// - Berikan nomor urut untuk memudahkan user memilih
// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword
const storage_1 = require("./storage");
const utils_1 = require("./utils");
const types_1 = require("./types");
function addTodo(str) {
    if (!(0, utils_1.isValidString)(str)) {
        console.log(`\n${types_1.RED}*** Input Task not Valid${types_1.RESET}`);
        return;
    }
    const todos = (0, storage_1.loadTodos)();
    const newTodo = {
        id: Date.now(),
        task: str,
        status: 'active',
    };
    todos.push(newTodo);
    (0, storage_1.saveTodos)(todos, 'ADD');
    listTodo();
}
function markTodo(id) {
    const todos = (0, storage_1.loadTodos)();
    const todo = todos.find((item, index) => index + 1 === id);
    if (!todo) {
        console.log(`\n${types_1.RED}*** Task No. not found !${types_1.RESET}`);
        return;
    }
    if (todo.status === 'done') {
        console.log(`\n${types_1.RED}*** Task already mark done !${types_1.RESET}`);
        return;
    }
    todo.status = 'done';
    (0, storage_1.saveTodos)(todos, 'MARK');
    listTodo();
}
function deleteTodo(id) {
    const todos = (0, storage_1.loadTodos)();
    const filteredTodos = todos.filter((item, index) => index + 1 !== id);
    if (filteredTodos.length === todos.length) {
        console.log(`\n${types_1.RED}*** Task No. not found !${types_1.RESET}`);
        return;
    }
    (0, storage_1.saveTodos)(filteredTodos, 'DEL');
    listTodo();
}
function listTodo() {
    const todos = (0, storage_1.loadTodos)();
    console.log(`\n${types_1.PINK}*** List Todo ***${types_1.RESET}`);
    if (todos.length === 0) {
        console.log(`${types_1.YELLOW}--- Empty List ---${types_1.RESET}`);
        return;
    }
    todos.forEach((item, index) => {
        const sts = item.status === 'done'
            ? `${types_1.GREEN}[DONE]  ${types_1.RESET}`
            : `${types_1.RED}[ACTIVE]${types_1.RESET}`;
        console.log(`${sts} ${types_1.BLUE}${index + 1}.  ${types_1.YELLOW}${item.task}${types_1.RESET}`);
    });
}
function searchTodo(str) {
    const todos = (0, storage_1.loadTodos)();
    const filteredTodos = todos.filter((item, index) => item.task.toLowerCase().includes(str.toLowerCase()));
    if (filteredTodos.length === 0) {
        console.log(`\n${types_1.RED}*** Search not found !${types_1.RESET}`);
        return;
    }
    console.log(`\n${types_1.PINK}*** List Todo ***${types_1.RESET}`);
    filteredTodos.forEach((item, index) => {
        const sts = item.status === 'done'
            ? `${types_1.GREEN}[DONE]  ${types_1.RESET}`
            : `${types_1.RED}[ACTIVE]${types_1.RESET}`;
        console.log(`${sts} ${types_1.BLUE}${index + 1}.  ${types_1.YELLOW}${item.task}${types_1.RESET}`);
    });
}
