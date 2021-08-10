import { FC } from "react";
import { useRouter } from "next/router";
import useResize from "../hooks/useResize";

const Layout: FC = ({ children }) => {
  const router = useRouter();

  useResize("layout", true);

  return (
    <div
      id="layout"
      style={{ display: "flex", flexDirection: "column", visibility: "hidden" }}
    >
      <h1 onClick={() => router.push("/")}>Book Store</h1>

      {children}
    </div>
  );
};

export default Layout;
