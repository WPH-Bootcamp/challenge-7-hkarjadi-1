"use strict";
// import * as fs from 'fs';
// import * as path from 'path';
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
exports.loadTodos = loadTodos;
exports.saveTodos = saveTodos;
// TODO: Definisikan path file untuk menyimpan data To-Do
// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file
// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan
// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)
// import { readFile, writeFile } from 'fs/promises';
// import { join } from 'path';
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const directory = path.join(__dirname, '../data');
const filePath = path.join(directory, 'todos.json');
const types_1 = require("./types");
function loadTodos() {
    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(data);
        }
    }
    catch (error) {
        console.error(`\n${types_1.RED}*** Fail to Load Data:${types_1.RESET} `, error);
    }
}
function saveTodos(todos, opr) {
    try {
        const data = JSON.stringify(todos, null, 4);
        fs.writeFileSync(filePath, data, 'utf-8');
        switch (opr) {
            case 'ADD':
                console.log(`\n${types_1.PINK}*** Task Added Successful ***${types_1.RESET}`);
                break;
            case 'DEL':
                console.log(`\n${types_1.PINK}*** Task Delete Successful ***${types_1.RESET}`);
                break;
            case 'MARK':
                console.log(`\n${types_1.PINK}*** Mark Complete Done ***${types_1.RESET}`);
                break;
        }
    }
    catch (error) {
        console.error(`\n${types_1.RED}Fail to Save Data:${types_1.RESET} `, error);
    }
}
