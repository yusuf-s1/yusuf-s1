import React from "react";
import useLocalStorage from "use-local-storage";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log("Hi there");
  };
  return (
    <>
      <div className="app" data-theme={theme}>
        <Header handleClick={switchTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/*" element={<Layout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
