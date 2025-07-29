# Day 1 – Backend & Database Foundations

## ✅ Topics Covered

### 1. Introduction to Node.js
- Node.js is a JavaScript runtime built on Chrome’s V8 engine.
- It uses an event-driven, non-blocking I/O model – perfect for scalable applications.
- Core modules include `http`, `fs`, `path`, and `events`.

### 2. REST API Overview
- REST: Representational State Transfer.
- Stateless client-server architecture.
- CRUD operations via HTTP methods:
  - GET – Read
  - POST – Create
  - PUT/PATCH – Update
  - DELETE – Remove

### 3. Relational vs Non-Relational Databases
| Feature | Relational (SQL) | Non-Relational (NoSQL) |
|--------|------------------|------------------------|
| Structure | Table-based | Document/Key-Value |
| Schema | Fixed | Flexible |
| Examples | PostgreSQL, MySQL | MongoDB, Redis |

### 4. MongoDB Crash Course
- Document-based NoSQL database.
- Stores data in JSON-like BSON format.
- Collections instead of tables.
- CRUD operations with `mongoose` or native driver.
- Basic commands:
```js
db.users.insertOne({ name: "John", age: 25 });
db.users.find({ age: { $gt: 18 } });
```

## 🔁 Summary
Learned foundational backend concepts: REST APIs, Node.js, database types, and MongoDB essentials.
