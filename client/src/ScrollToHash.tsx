import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    const scroll = () => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    // 🔥 important : attendre que la page soit montée
    const timeout = setTimeout(scroll, 200);

    return () => clearTimeout(timeout);
  }, [hash, pathname]);

  return null;
}