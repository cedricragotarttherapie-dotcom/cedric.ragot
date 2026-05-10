import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    let attempts = 0;

    const interval = setInterval(() => {
      const el = document.getElementById(id);

      attempts++;

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        clearInterval(interval);
      }

      if (attempts > 30) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [hash, pathname]);

  return null;
}