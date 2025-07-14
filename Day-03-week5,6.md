# 📘 Today's Learning Summary – React Intermediate Concepts

## 📅 Date: July 14, 2025

✍️ Prepared by: Aoun Raza

---

## ⚛️ React Intermediate Concepts

Today, I explored several important React topics that deepen understanding of dynamic and modular applications.

---

### ✅ What I Covered:

---

### 1. **Component Lifecycle**

- React components go through phases: **Mounting**, **Updating**, and **Unmounting**.
- Lifecycle methods (Class Components):
  - `componentDidMount()`
  - `componentDidUpdate()`
  - `componentWillUnmount()`
- In functional components, these are handled using **Hooks** like `useEffect`.

```jsx
useEffect(() => {
  console.log("Component Mounted");

  return () => {
    console.log("Component Unmounted");
  };
}, []);
```

---

### 2. **Lists and Keys**

- Rendering a list of items using `map()`:

```jsx
const items = ["Apple", "Banana", "Cherry"];

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```

- **Keys** help React identify which items have changed, are added, or are removed.

---

### 3. **React Hooks**

#### ➤ `useState`

```jsx
const [count, setCount] = useState(0);
```

#### ➤ `useEffect`

```jsx
useEffect(() => {
  // Side effect code
}, [dependencies]);
```

#### ➤ `useRef`, `useMemo`, `useCallback` – covered briefly for performance optimization and referencing DOM.

---

### 4. **Custom Hooks**

- Reusable logic encapsulated in a custom hook:

```jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
```

---

### 5. **React Router**

- Enables **SPA navigation** without full page reload.
- Basic setup:

```bash
npm install react-router-dom
```

#### ➤ Example usage:

```jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

---

### 📝 Summary

- Understood how React handles lifecycle events.
- Learned to dynamically render lists using keys.
- Used various built-in React hooks to manage state, effects, and DOM.
- Created a **custom hook** for reusable logic.
- Integrated **React Router** for navigation in single-page applications.

---

🚀 Ready to dive deeper into **state management libraries**, **form handling**, and **performance optimization** in React!
