import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center mt-20">

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome to our E-Commerce
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          The product grid will arrive soon here!
        </p>
      </main>
    </div>
  );
}

export default App;