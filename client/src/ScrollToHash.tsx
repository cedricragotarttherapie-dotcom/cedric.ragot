import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");

    const tryScroll = () => {
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }

      return false;
    };

    // on attend que React ait rendu la page
    let attempts = 0;

    const interval = setInterval(() => {
      attempts++;

      if (tryScroll() || attempts > 20) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [hash, pathname]);

  return null;
}