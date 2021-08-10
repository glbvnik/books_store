import { useEffect } from "react";

function useResize(id: string, client = false, offSet = 0) {
  useEffect(() => {
    const el = document.getElementById(id)!;

    const resize = () => {
      el.style.minHeight = `${
        (client ? document.documentElement.clientHeight : window.innerHeight) -
        offSet
      }px`;

      el.style.visibility = "initial";
    };

    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, [id, client, offSet]);
}

export default useResize;
