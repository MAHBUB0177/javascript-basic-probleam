// 1. Explain the data types available in TypeScript.?

// 1. Built-in data types: String,number,boolean,null,undefined,Any.
// 2.User-defined data types:arrays,enums,classes,Interface

// 2. In how many ways we can declare variables in TypeScript?
// let name:string='mahbub'

// 3.What are the advantages of using TypeScript?
// 1.typescript compiled into javascript so it can executed or run any browser.
// 2.It allow us to declare strongly or statically typed variables.
// 3.TypeScript throw errors at the compilation time during development unlike of JavaScript that shows errors at the runtime.

// 9. What is type null and its use in TypeScript?
// The null keyword basically indicates the unavailability of a value. It can be used to check whether a value is provided to a particular variable or not.

// 10. Describe the syntax for creating objects in TypeScript?
// const myobj : {name:String,age:number} ={
//     name:'mahbub',
//     age:23
// }

// 11. Can we specify the optional properties to TypeScript Object, if Yes, explain How?
// const myObj: { name: string, desc: string, est?: number } = {
//     name: "GeeksforGeeks",
//     desc: "A Computer Science Portal",
// };
// console.log(myObj);

// 12. Explain the undefined type in TypeScript?
// we declare a vaiable but can not assign value in this variable
let x;
console.log(x); // undefined


// 19. Is TypeScript strictly statically typed language?
// No, TypeScript is not a strictly statically typed language it is an optional statically typed language that
//  means it is in our hands that a particular variable has to be statically typed or not.
//  We can use the any type and allow a variable to accept the value of any kind of data type.

// 21. How to declare a arrow function in TypeScript?
// const functionName = (param1: Type1, param2: Type2): ReturnType => {
//   // function body
// };//basic syntex


// const add = (a: number, b: number): number => {
//   return a + b;
// };

// console.log(add(5, 3)); // 8

// 20. When to use interface vs type?
// Use interface when you're describing the shape of objects or class contracts
// interface User {
//   name: string;
//   age: number;
// }

// Use type for more complex unions, intersections, or primitives,tuple, or mapped types
// type Status = "success" | "error" | "loading";
// type ID = string | number;
// type Point = [number, number]; // Tuple
// type Callback = () => void;    // Function type


// 21.What is the use of tsconfig.json file in TypeScript?
// The tsconfig.json file in TypeScript is a configuration file that tells the TypeScript compiler (tsc) how to compile the project.
// Which files to include/exclude
// Compiler options (like target version, module system, etc.)
// Settings for type checking, paths, aliases, and more


// 1.cross browser functionality
// 2.performance optimization
// 3.memory lickage

//cross browser functionalty?
// Cross-browser functionality refers to how well a website or web application works across different web browsers, such as:
// Google Chrome,Mozilla Firefox,Safari,Microsoft Edge,Opera
// Different browsers:
// Interpret HTML, CSS, and JavaScript differently.
// Have different levels of support for modern features.
// look broken (layout issues).
// Function improperly (buttons, forms, or animations don’t work).
// Prevent users from completing key actions (like signing up or submitting a form).


// Best practices for cross-browser functionality:
// Use web standards (HTML5, CSS3, ES6+ JavaScript).
// Test on multiple browsers and devices.
// Use CSS resets or normalize.css to handle default styling differences.
// normalize.css is a CSS file that helps make your website look consistent across all browsers by:
// Preserving useful default styles.
// Correcting bugs and inconsistencies in default browser styles.
// Making elements render more uniformly across different browsers and devices.


// ***memory lecakage wy happend?
// Memory leaks in frontend development (including React and Next.js) occur 
// when your application retains memory that is no longer needed, preventing the browser from reclaiming it.
//  Over time, this can lead to performance degradation and even application crashes.

//  (  memory leaks  bescicaly main je karon e hoi seta hosse amdr application unnecessary amon kico Data
//     dhore rakhe jeta  asole amader dorkr nei.and somoier sate sate setar poriman atoi besi hoie jai je 
//     akta somoi por amdr application er perfermance kome jai and akta somoi por seta crached Kore.
//  )

// Common Causes of Memory Leaks in React/Next.js:
// 1.Uncleared Timers/Intervals:
useEffect(() => {
  const interval = setInterval(() => {
    // some logic
  }, 1000);

  return () => clearInterval(interval); // ✅ cleanup
}, []);
// If you don’t clear the interval/timeout, it continues running even after the component is unmounted.

// 2.Unsubscribed Event Listeners
// Adding event listeners like window.addEventListener but not removing them.
useEffect(() => {
  const handleResize = () => {/*...*/};
  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize); // ✅ cleanup
}, []);

// 3.Dangling Promises or Async Calls
// If an async call sets state after the component is unmounted, it may cause memory leaks or warning logs.
useEffect(() => {
  let isMounted = true;

  async function fetchData() {
    const data = await fetchSomething();
    if (isMounted) {
      setData(data);
    }
  }

  fetchData();

  return () => {
    isMounted = false;
  };
}, []);

// 4.Component Re-render Loops
// Unintentional infinite re-renders can rapidly consume memory


// 5.Improper Global State Usage
// Memory leaks can occur when components keep references to global state (like Redux, Zustand, Context) 
// but don’t unsubscribe when unmounted.

// 5.Excessive use of refs/variale:
// Storing large DOM references in useref/variable and not cleaning them up properly.


// **** how to improves performance optimization in application?

// Improving performance optimization in your frontend application (React, Next.js, or any modern frontend stack)
//  involves focusing on load speed, rendering efficiency, responsiveness, and memory usage.

//  1. Code Splitting & Lazy Loading
//  Reduce initial bundle size and load only the code needed.

 const LazyComponent = React.lazy(() => import('./MyComponent'));
<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>

//  2. Image Optimization
//  Use WebP or AVIF instead of JPG/PNG.
//  Use lazy loading (<img loading="lazy" />).
//  Use image CDN (Next.js has built-in <Image> optimization).
{/* <img loading="lazy" /> */}

// Without lazy loading:
// All images load immediately on page load — even if they are far below the fold (not visible).
// This slows down page performance, especially on slow networks.

// With lazy loading:
// Only visible images or those near the viewport are loaded.
// It saves bandwidth and improves load time and performance.

// 3. Avoid Unnecessary Re-renders
// React.memo() for components
// useMemo() and useCallback() to memoize functions and values
// key props in lists for efficient diffing

// 4. Virtualization for Long Lists: Rendering large lists directly slows down the app.
// React virtualization is a performance optimization technique used to efficiently render 
// large lists or grids by only rendering visible items in the viewport — not the entire list at once.

// Rendering thousands of DOM nodes (e.g. long lists) at once:
// ⛔ Slows down your app
// ⛔ Wastes memory
// ⛔ Reduces performance, especially on mobile

// Instead, virtualization ensures:
// ✅ Only what's visible is in the DOM
// ✅ As you scroll, new items are mounted/unmounted dynamically

// 5. Memory Optimization:
// Clear intervals, timeouts, and Unsubscribed Event Listeners on unmount
// Avoid storing large objects in useRef or state
// Avoid memory leaks by managing async cleanup

// 6. Caching & SWR
// Use tools like:
// SWR (Stale-While-Revalidate)
// React Query

// 7. Reduce Third-party Dependencies
// 🔹 Why:
// Large libraries increase bundle size.
// Use lightweight alternatives (dayjs instead of moment, clsx instead of classnames)
// Import only what's needed (lodash-es, or tree-shakeable imports)


// Without Debouncing (bad way)
import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  const handleSearch = (value) => {
    console.log("API call with:", value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        handleSearch(e.target.value); // runs on EVERY keystroke
      }}
    />
  );
}

export default Search;

// output:
// API call with: h
// API call with: he
// API call with: hel
// API call with: hell
// API call with: hello



// With Debouncing (good way)
// import React, { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");

  // Debounce utility
  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const handleSearch = (value) => {
    console.log("API call with:", value);
  };

  // Create a debounced version of handleSearch
  const debouncedSearch = debounce(handleSearch, 500);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        debouncedSearch(e.target.value); // waits until typing stops
      }}
    />
  );
}

// export default Search;



//how to call server action in client component in next js 13?
// 1. Define the server action in a server component or a separate file.
// 2. Import the server action into your client component.
// 3. Call the server action from an event handler or useEffect in the client component.
"use server";

export async function getProducts(search) {
  const res = await fetch(`https://fakestoreapi.com/products?search=${search}`, {
    cache: "no-store", // always fresh
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}

"use client";
import { useState } from "react";
import { getProducts } from "../actions"; // import server action

  function ProductSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await getProducts(query); // ✅ calls server action
      setResults(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search product..."
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((p) => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </div>
  );
}


// react life cycle??
// 1.Mounting — Component is created and inserted into the DOM.
// 2.Updating — Component is re-rendered when its state or props change.
// 3.Unmounting — Component is removed from the DOM.

MOunting:
useEffect(() => {
  // Runs once when the component mounts
  console.log("Mounted!");
  
  return () => {
    // Optional cleanup (like componentWillUnmount)
  };
}, []); // Empty dependency array → runs once


updating:
useEffect(() => {
  console.log("Component updated!");
}, [someStateOrProp]);
// The effect runs whenever the dependency (someStateOrProp) changes.

unmounting:

useEffect(() => {
  // return () => {
  //   console.log("Component unmounted!");
  // };
  const timer = setInterval()
  return () => clearInterval(timer); // cleanup
}, []);
