import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function themeFormLocalStorage() {
  const storedTheme = localStorage.getItem("theme");
  return storedTheme in themes ? storedTheme : themes.winter;
}

function Navbar() {
  const [currentTheme, setCurrentTheme] = useState(themeFormLocalStorage());
  const [isDarkMode, setIsDarkMode] = useState(currentTheme === themes.dracula);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const handleLogout = () => {
    dispatch({ type: "LOG_OUT" });
  };

  const handleMode = () => {
    setCurrentTheme((prev) => {
      const newTheme = prev === themes.winter ? themes.dracula : themes.winter;
      setIsDarkMode(newTheme === themes.dracula);
      return newTheme;
    });
  };

  return (
    <div className="mt-3 border-b-2 py-3 mb-10">
      <div className="navbar align-content">
        <div className="navbar-start">
          <Link to="/" className="btn btn-secondary hidden lg:flex">
            Kitchen App
          </Link>
          <div className="dropdown lg:hidden btn-secondary">
            <div tabIndex={0} role="button" className="btn m-1">
              KitchenApp
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end flex gap-5 items-center">
          <div className="navbar-end flex gap-5 items-center">
            <label className="swap swap-rotate mr-5">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={handleMode}
              />
              <FaSun className="swap-on fill-current w-6 h-6" />
              <FaMoon className="swap-off fill-current w-6 h-6" />
            </label>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <button className="btn btn-secondary" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
