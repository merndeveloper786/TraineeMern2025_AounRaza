# Day 3 – Backend + Frontend Pitfalls and Best Practices

## ✅ Topics Covered

### 1. Cron Jobs
- Scheduled background tasks.
- `node-cron` or system-level `crontab`.
```js
cron.schedule('*/5 * * * *', () => {
  console.log('Running every 5 minutes');
});
```

### 2. Express.js Overview
- Minimal, fast Node.js web framework.
```js
app.get('/api/users', (req, res) => {
  res.json({ message: 'All users' });
});
```

### 3. Express Mistakes to Avoid
- ❌ Not handling async errors with `next(err)`
- ❌ Missing middleware order
- ✅ Use global error handler
- ✅ Use `helmet`, `cors`, and `morgan` for safety and logging

### 4. React Mistakes to Avoid
- ❌ Direct state mutation: `state.count++`
- ❌ Using index as key in lists
- ✅ Use `useEffect` dependencies correctly
- ✅ Keep components small & reusable

## 🔁 Summary
Covered scheduled tasks with cron, explored Express.js deeply, and reviewed common mistakes in both Express and React development.
