import { useEffect } from "react";

export const useGlobalKeydownListener = (key, callback) => {
  useEffect(() => {
    const handleKeyDown = (evt) => {
      if (evt.key === key) {
        callback();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  }, []);
}