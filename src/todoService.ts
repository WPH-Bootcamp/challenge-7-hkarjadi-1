// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts

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

import { loadTodos, saveTodos } from './storage';

import {
  Todo,
  todoStatus,
  addTodo,
  markTodo,
  deleteTodo,
  listTodo,
} from './types';

import { isValidString } from './utils';

import { RED, GREEN, YELLOW, PURPLE, PINK, BLUE, RESET } from './types';

function addTodo(str: string) {
  if (!isValidString(str)) {
    console.log(`\n${RED}*** Input Task not Valid${RESET}`);
    return;
  }
  const todos = loadTodos();
  const newTodo: Todo = {
    id: Date.now(),
    task: str,
    status: 'active',
  };
  todos.push(newTodo);
  saveTodos(todos, 'ADD');
  listTodo();
}

function markTodo(id: number): void {
  const todos: Todo[] = loadTodos();
  const todo = todos.find((item, index) => index + 1 === id);

  if (!todo) {
    console.log(`\n${RED}*** Task No. not found !${RESET}`);
    return;
  }
  if (todo.status === 'done') {
    console.log(`\n${RED}*** Task already mark done !${RESET}`);
    return;
  }

  todo.status = 'done';
  saveTodos(todos, 'MARK');
  listTodo();
}

function deleteTodo(id: number) {
  const todos: Todo[] = loadTodos();
  const filteredTodos = todos.filter((item, index) => index + 1 !== id);
  if (filteredTodos.length === todos.length) {
    console.log(`\n${RED}*** Task No. not found !${RESET}`);
    return;
  }
  saveTodos(filteredTodos, 'DEL');
  listTodo();
}

function listTodo(): void {
  const todos: Todo[] = loadTodos();

  console.log(`\n${PINK}*** List Todo ***${RESET}`);
  if (todos.length === 0) {
    console.log(`${YELLOW}--- Empty List ---${RESET}`);
    return;
  }

  todos.forEach((item, index) => {
    const sts =
      item.status === 'done'
        ? `${GREEN}[DONE]  ${RESET}`
        : `${RED}[ACTIVE]${RESET}`;
    console.log(`${sts} ${BLUE}${index + 1}.  ${YELLOW}${item.task}${RESET}`);
  });
}

function searchTodo(str: string) {
  const todos: Todo[] = loadTodos();
  const filteredTodos = todos.filter((item, index) =>
    item.task.toLowerCase().includes(str.toLowerCase())
  );
  if (filteredTodos.length === 0) {
    console.log(`\n${RED}*** Search not found !${RESET}`);
    return;
  }
  console.log(`\n${PINK}*** List Todo ***${RESET}`);
  filteredTodos.forEach((item, index) => {
    const sts =
      item.status === 'done'
        ? `${GREEN}[DONE]  ${RESET}`
        : `${RED}[ACTIVE]${RESET}`;
    console.log(`${sts} ${BLUE}${index + 1}.  ${YELLOW}${item.task}${RESET}`);
  });
}

export { addTodo, markTodo, deleteTodo, listTodo, searchTodo };
