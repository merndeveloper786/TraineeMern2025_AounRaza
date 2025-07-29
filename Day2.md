# Day 2 – Node.js Complete Course Summary

## ✅ Topics Covered

### 1. Node.js Core Concepts
- Asynchronous programming with callbacks, promises, async/await.
- Modules: CommonJS (`require`) and ESModules (`import`).
- Built-in modules like `fs`, `http`, `path`, `os`.

### 2. Creating a Simple HTTP Server
```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.end("Hello from Node.js server!");
});
server.listen(3000);
```

### 3. Working with File System (fs)
```js
fs.readFileSync, fs.writeFileSync
fs.readFile, fs.writeFile (Async)
```

### 4. Events & Streams
- `EventEmitter` for custom events.
- Streams for reading/writing large data.

### 5. NPM & Package Management
- `npm init`, `npm install`
- `nodemon` for auto-restart
- `dotenv` for managing environment variables

## 🔁 Summary
Gained deep understanding of Node.js including file system operations, event handling, and core module usage.
