import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage(false);

  useEffect(() => {
    //If local storage is true add the clas dark-mode to the body element
    if (darkMode) {
      document.querySelector("body").classList.remove("dark-mode");
    } else {
      document.querySelector("body").classList.add("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
