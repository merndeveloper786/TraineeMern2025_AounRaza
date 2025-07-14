# 📘 Today's Learning Summary – React Basics

## 📅 Date: July 14, 2025

✍️ Prepared by: Aoun Raza

---

## ⚛️ React: Understanding the Basics

Today, I learned the fundamentals of **React** before diving into more advanced concepts like state and hooks.

---

### ✅ What I Covered:

### 1. **Creating a React Component**

There are two types of components in React:

#### ➤ Functional Components (Modern)

```jsx
function Welcome() {
  return <h1>Hello, Welcome to React!</h1>;
}
```

#### ➤ Arrow Function Version

```jsx
const Welcome = () => <h1>Hello, Welcome to React!</h1>;
```

#### ➤ Class Components (Older Style)

```jsx
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h1>Hello, Welcome to React!</h1>;
  }
}
```

---

### 2. **JSX (JavaScript XML)**

- JSX allows writing HTML-like syntax inside JavaScript.
- Makes it easier to create UI components.
- Example:

```jsx
const element = <h2>This is JSX!</h2>;
```

---

### 3. **Props (Properties)**

- Props allow passing data from **parent to child** component.
- Example:

```jsx
const Greet = (props) => <h1>Hello, {props.name}</h1>;

// Usage
<Greet name="Aoun" />;
```

---

### 4. **Component Composition**

- Components can include other components to build complex UIs.
- Example:

```jsx
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
```

---

### 5. **Folder Structure (Typical for Vite + React)**

```
src/
├── components/
│   └── MyComponent.jsx
├── App.jsx
└── main.jsx
```

---

### 6. **Rendering Components**

- Components are rendered using `ReactDOM`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

---

### 7. **Best Practices Learned**

- Components must start with a capital letter.
- Return a **single JSX element** (wrap multiple elements in a `<div>` or `<>` fragment).
- Keep components small and reusable.

---

📌 Looking forward to learning about **state management** and **React Hooks** next!
