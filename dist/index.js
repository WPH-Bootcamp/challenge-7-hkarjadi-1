"use strict";
// TODO: Import readline untuk membaca input dari command line
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
const todoService_1 = require("./todoService");
const readline = __importStar(require("readline"));
const types_1 = require("./types");
const utils_1 = require("./utils");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log(`${types_1.YELLOW}Welcome to TypeScript To-Do App!${types_1.RESET}`);
console.log(`${types_1.YELLOW}Start building your app here...${types_1.RESET}`);
function DisplayMenu() {
    const sekarang = new Date();
    const char = ` `;
    const replicated = char.repeat(53);
    console.log(`\n${types_1.GREEN}=== To Do Apps ===${replicated}${(0, utils_1.formatDate)(sekarang)}${types_1.RESET}   `);
    console.log(`${types_1.BLUE}1. ${types_1.YELLOW}Add todo${types_1.RESET}`);
    console.log(`${types_1.BLUE}2. ${types_1.YELLOW}Mark complete${types_1.RESET}`);
    console.log(`${types_1.BLUE}3. ${types_1.YELLOW}Delete todo${types_1.RESET}`);
    console.log(`${types_1.BLUE}4. ${types_1.YELLOW}List all todos${types_1.RESET}`);
    console.log(`${types_1.BLUE}5. ${types_1.YELLOW}Search todos${types_1.RESET}`);
    console.log(`${types_1.BLUE}6. ${types_1.YELLOW}Exit${types_1.RESET}`);
    rl.question(`\n${types_1.PURPLE}Please select your choice (1-6) ?  ${types_1.RESET}`, (answer) => {
        pilihan(answer);
    });
}
function pilihan(input) {
    switch (input) {
        case '1':
            rl.question(`\n${types_1.GREEN}Please input new task ? ${types_1.RESET}`, (task) => {
                (0, todoService_1.addTodo)(task);
                DisplayMenu();
            });
            return;
        case '2':
            (0, todoService_1.listTodo)();
            rl.question(`\n${types_1.GREEN}Please input Task No. to Mark ? ${types_1.RESET}`, (id) => {
                (0, todoService_1.markTodo)(parseInt(id));
                DisplayMenu();
            });
            return;
        case '3':
            (0, todoService_1.listTodo)();
            rl.question(`\n${types_1.GREEN}Please input Task No. to Delete? ${types_1.RESET}`, (id) => {
                (0, todoService_1.deleteTodo)(parseInt(id));
                DisplayMenu();
            });
            return;
        case '4':
            (0, todoService_1.listTodo)();
            break;
        case '5':
            rl.question(`\n${types_1.GREEN}Please input Task to Search? ${types_1.RESET}`, (str) => {
                (0, todoService_1.searchTodo)(str);
                DisplayMenu();
            });
            return;
        case '6':
            console.log(`\n${types_1.YELLOW}Thank you for using To Do Apps !${types_1.YELLOW}`);
            rl.close();
            return;
        default:
            console.log(`\n${types_1.RED}*** Invalid selection, please try again.${types_1.RESET}`);
    }
    DisplayMenu();
}
DisplayMenu();
