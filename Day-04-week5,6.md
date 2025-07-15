# 📘 Daily Learning Report – July 15, 2025

## ✅ Topics Covered

Today, I learned and practiced the following key concepts in React development:

---

## 1. 🧾 Form Handling in React

- Created controlled forms using React's `useState`.
- Managed form inputs (text fields, checkboxes, etc.).
- Used `onChange`, `onSubmit` handlers to capture user input.
- Example:

  ```jsx
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
  ```

---

## 2. 🎨 Styling JSX

- Used inline styles and CSS classes in JSX.
- Learned Tailwind CSS utility classes for rapid styling.
- Example:

  ```jsx
  <button style={{ backgroundColor: "blue", color: "white" }}>
    Click Me
  </button>

  <button className="bg-blue-500 text-white px-4 py-2 rounded">
    Tailwind Button
  </button>
  ```

---

## 3. 📦 Zustand (State Management)

- Explored Zustand for simple and scalable global state management.
- Created a custom store to share state across components.

  Example:

  ```js
  import create from "zustand";

  const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })),
  }));
  ```

  Usage in component:

  ```jsx
  const { count, increment } = useStore();
  return <button onClick={increment}>Count: {count}</button>;
  ```

---

## 4. 🔗 API Calls in React

- Learned how to make GET/POST requests from React components.
- Explored best practices for handling loading and error states.

---

## 5. 📡 Axios – HTTP Client

- Used Axios to send HTTP requests easily.
- Example:

  ```js
  import axios from "axios";

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);
  ```

---

## 6. ⚡ SWR – React Hooks for Data Fetching

- Learned how SWR simplifies fetching, caching, and revalidation.
- Example:

  ```js
  import useSWR from "swr";
  import axios from "axios";

  const fetcher = (url) => axios.get(url).then((res) => res.data);

  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
  ```

---

## 📝 Summary

Today's session strengthened my knowledge in form handling, component styling, and state/data management in React. Zustand, Axios, and SWR provided powerful tools to improve the performance and maintainability of React apps.

---

**Submitted by:** Aoun Raza  
**Date:** July 15, 2025
