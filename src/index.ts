// TODO: Import readline untuk membaca input dari command line

// TODO: Import fungsi-fungsi dari todoService

// TODO: Import fungsi-fungsi dari utils (termasuk type guards)

// TODO: Buat fungsi untuk menampilkan menu utama
// Tampilkan opsi seperti:
// 1. Add new todo
// 2. Mark todo as complete
// 3. Delete todo
// 4. List all todos
// 5. Search todos
// 6. Exit

// TODO: Buat fungsi untuk handle input dari user
// Gunakan readline.question untuk menerima input

// TODO: Buat fungsi main yang akan menjalankan aplikasi secara loop
// Hint: Gunakan recursive function atau while loop

// TODO: Jalankan fungsi main

import {
  addTodo,
  markTodo,
  deleteTodo,
  listTodo,
  searchTodo,
} from './todoService';

import * as readline from 'readline';

import { RED, GREEN, YELLOW, PURPLE, PINK, BLUE, RESET } from './types';

import { formatDate } from './utils';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`${YELLOW}Welcome to TypeScript To-Do App!${RESET}`);
console.log(`${YELLOW}Start building your app here...${RESET}`);

function DisplayMenu(): void {
  const sekarang = new Date();
  const char: string = ` `;
  const replicated: string = char.repeat(53);
  console.log(
    `\n${GREEN}=== To Do Apps ===${replicated}${formatDate(
      sekarang
    )}${RESET}   `
  );
  console.log(`${BLUE}1. ${YELLOW}Add todo${RESET}`);
  console.log(`${BLUE}2. ${YELLOW}Mark complete${RESET}`);
  console.log(`${BLUE}3. ${YELLOW}Delete todo${RESET}`);
  console.log(`${BLUE}4. ${YELLOW}List all todos${RESET}`);
  console.log(`${BLUE}5. ${YELLOW}Search todos${RESET}`);
  console.log(`${BLUE}6. ${YELLOW}Exit${RESET}`);
  rl.question(
    `\n${PURPLE}Please select your choice (1-6) ?  ${RESET}`,
    (answer) => {
      pilihan(answer);
    }
  );
}

function pilihan(input: string): void {
  switch (input) {
    case '1':
      rl.question(`\n${GREEN}Please input new task ? ${RESET}`, (task) => {
        addTodo(task);
        DisplayMenu();
      });
      return;
    case '2':
      listTodo();
      rl.question(
        `\n${GREEN}Please input Task No. to Mark ? ${RESET}`,
        (id) => {
          markTodo(parseInt(id));
          DisplayMenu();
        }
      );
      return;
    case '3':
      listTodo();
      rl.question(
        `\n${GREEN}Please input Task No. to Delete? ${RESET}`,
        (id) => {
          deleteTodo(parseInt(id));
          DisplayMenu();
        }
      );
      return;
    case '4':
      listTodo();
      break;
    case '5':
      rl.question(`\n${GREEN}Please input Task to Search? ${RESET}`, (str) => {
        searchTodo(str);
        DisplayMenu();
      });
      return;

    case '6':
      console.log(`\n${YELLOW}Thank you for using To Do Apps !${YELLOW}`);
      rl.close();
      return;
    default:
      console.log(`\n${RED}*** Invalid selection, please try again.${RESET}`);
  }
  DisplayMenu();
}

DisplayMenu();
