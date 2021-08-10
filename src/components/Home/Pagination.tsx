import { FC } from "react";
import { useRouter } from "next/router";
import styles from "./Home.module.scss";

const Pagination: FC = () => {
  const router = useRouter();

  const totalItems = 50;
  const itemsPerPage = 9;

  const pages = new Array(Math.round(totalItems / itemsPerPage))
    .fill(undefined)
    .map((_, id) => id + 1);

  const currentPage = (+router.query.page! as number) || 1;

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <a
          key={page}
          onClick={() => router.push(`/?page=${page}`)}
          style={
            currentPage === page ? { backgroundColor: "lightgrey" } : undefined
          }
        >
          {page}
        </a>
      ))}
    </div>
  );
};

export default Pagination;
