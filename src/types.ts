// TODO: Definisikan tipe data untuk To-Do item di sini
// Hint: To-Do sebaiknya memiliki id, text, dan status completed

// TODO: Buat interface untuk To-Do item

// TODO: Buat tipe untuk status To-Do (active/done)

// TODO: Buat tipe untuk fungsi-fungsi yang akan digunakan

interface Todo {
  id: number;
  task: string;
  status: todoStatus;
}

type todoStatus = 'active' | 'done';
type addTodo = (str: string) => void;
type markTodo = (id: number) => void;
type deleteTodo = (id: number) => void;
type listTodo = () => void;
type searchTodo = (str: string) => void;

const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const PURPLE = '\x1b[34m';
const PINK = '\x1b[35m';
const BLUE = '\x1b[36m';
const RESET = '\x1b[0m';

export {
  Todo,
  todoStatus,
  addTodo,
  markTodo,
  deleteTodo,
  listTodo,
  searchTodo,
};

export { RED, GREEN, YELLOW, PURPLE, PINK, BLUE, RESET };
