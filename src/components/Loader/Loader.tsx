import { FC } from "react";
import useResize from "../../hooks/useResize";
import styles from "./Loader.module.scss";

const Loader: FC = () => {
  useResize("loader", true, 32);

  return (
    <>
      <div className={styles.loader} id="loader">
        <div />
      </div>
    </>
  );
};

export default Loader;
