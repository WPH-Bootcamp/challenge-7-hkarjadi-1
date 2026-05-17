// import * as fs from 'fs';
// import * as path from 'path';

// TODO: Definisikan path file untuk menyimpan data To-Do

// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file

// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan

// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)

// import { readFile, writeFile } from 'fs/promises';
// import { join } from 'path';

import * as fs from 'fs';
import * as path from 'path';

import { Todo } from './types';

const directory = path.join(__dirname, '../data');
const filePath = path.join(directory, 'todos.json');

import { RED, GREEN, YELLOW, PURPLE, PINK, BLUE, RESET } from './types';

function loadTodos() {
  try {
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error(`\n${RED}*** Fail to Load Data:${RESET} `, error);
  }
}

function saveTodos(todos: Todo[], opr: string) {
  try {
    const data = JSON.stringify(todos, null, 4);
    fs.writeFileSync(filePath, data, 'utf-8');
    switch (opr) {
      case 'ADD':
        console.log(`\n${PINK}*** Task Added Successful ***${RESET}`);
        break;
      case 'DEL':
        console.log(`\n${PINK}*** Task Delete Successful ***${RESET}`);
        break;
      case 'MARK':
        console.log(`\n${PINK}*** Mark Complete Done ***${RESET}`);
        break;
    }
  } catch (error) {
    console.error(`\n${RED}Fail to Save Data:${RESET} `, error);
  }
}

export { loadTodos, saveTodos };
