# 📘 Daily Learning Summary - July 16, 2025

## ✅ Topics Covered:

- In-depth Understanding of **SWR (stale-while-revalidate)**
- Revision of **React Hooks**
- Revision of **JSX (JavaScript XML)**
- Worked on assignment: **Navbar**, **Hero Section with Slider**, **Footer**, and **Pages**

---

## 🔁 SWR - _Stale-While-Revalidate_

### 🔹 What is SWR?

SWR is a React Hooks-based data fetching library developed by **Vercel**. It focuses on revalidation and caching of remote data for a fast, reactive UI.

### 🔹 Key Features:

- **Automatic Caching**
- **Revalidation on Focus**
- **Real-time Experience**
- **Incremental Static Regeneration Support**
- **TypeScript Support**

### 🔹 Basic Usage:

```jsx
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

function Profile() {
  const { data, error, isLoading } = useSWR("/api/user", fetcher);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return <div>Hello, {data.name}</div>;
}
```

### 🔹 Useful Options:

- `revalidateOnFocus`: re-fetch data when the window gains focus
- `refreshInterval`: polling interval for real-time data
- `fallbackData`: initial data to avoid empty states

---

## 🔁 React Hooks - Revision

### 🔹 useState

Manages local state in functional components.

```jsx
const [count, setCount] = useState(0);
```

### 🔹 useEffect

Performs side effects like fetching data or setting up subscriptions.

```jsx
useEffect(() => {
  console.log("Component mounted");
}, []);
```

### 🔹 Other Hooks Covered:

- `useRef`
- `useContext`
- `useMemo`
- `useCallback`

---

## 🔁 JSX - Revision

### 🔹 Key Points:

- JSX allows HTML-like syntax inside JavaScript.
- Must return a single parent element.
- Use `{}` to embed expressions.
- Use `className` instead of `class`, and inline styles with `{{}}`.

```jsx
function Welcome() {
  return (
    <div className="welcome">
      <h1>Hello, JSX!</h1>
    </div>
  );
}
```

---

## 🛠️ Assignment Work:

And also worked on the assignment:

- Implemented **Navbar**
- Built **Hero Section with a Slider**
- Designed **Footer**
- Created and styled **Pages** for the assignment

---

## 🧠 Summary:

Today’s session provided a strong understanding of SWR and refreshed fundamental concepts of React through revision of hooks and JSX. Additionally, continued hands-on practice through the assignment components helped reinforce practical skills.

---

**🔚 End of Day Log**
