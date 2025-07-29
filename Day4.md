# Day 4 – Web Auth & Caching Concepts

## ✅ Topics Covered

### 1. Web Storage
- `localStorage`: Persistent storage
- `sessionStorage`: Cleared on tab close
```js
localStorage.setItem("token", "abc123");
```

### 2. JWT (JSON Web Token)
- Stateless authentication mechanism.
- Contains header, payload, and signature.
```js
const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: '1h' });
```

### 3. Session vs Token Authentication
| Feature | Session | Token (JWT) |
|--------|---------|-------------|
| Storage | Server | Client |
| Scalability | Less | More |
| Stateless | ❌ | ✅ |

### 4. Session Authentication in React
- Uses cookies & server sessions (with `express-session`).
- Credentials flow: login → cookie stored → session maintained.
- Setup:
  - Axios with `withCredentials: true`
  - Backend should send cookie with `res.cookie(...)`

### 5. Redis Crash Course
- In-memory data store used for:
  - Caching
  - Sessions
  - Queues
```bash
SET user:1 "John"
GET user:1
```
- With Node.js:
```js
const redis = require("redis");
const client = redis.createClient();
client.set("key", "value");
```

## 🔁 Summary
Learned web auth flows, session handling, JWT tokens, and caching with Redis for fast, scalable web apps.
