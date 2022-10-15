import { useEffect } from "react";

export const useOutsideClickListener = (tag, callback) => {
  useEffect(() => {
    const handleClick = (evt) => {
      if (evt.target.classList.contains(`${tag}`)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  }, []);
}