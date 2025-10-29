import React, { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const Themes = () => {
  const themes = ["light", "dark"];
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="text-xl focus:outline-none transition hover:scale-110"
      >
        {theme === "light" && <BsSun size={17} className="text-yellow-700" />}
        {theme === "dark" && <BsMoon size={17} className="text-gray-700" />}
      </button>
    </div>
  );
};

export default Themes;
