import { FC } from "react";
import { IAuthors, IBooks } from "../../types";
import Carousel from "./Carousel/Carousel";
import BooksList from "./Books/BooksList";
import AuthorsList from "./Authors/AuthorsList";
import Pagination from "./Pagination";
import styles from "./Home.module.scss";

interface HomePops {
  authors: IAuthors[];
  books: IBooks[];
  carouselBooks: IBooks[];
}

const Home: FC<HomePops> = ({ authors, books, carouselBooks }) => {
  return (
    <div className={styles.homeGrid}>
      <h2 className={styles.header1}>For you</h2>
      <Carousel books={carouselBooks} />

      <h2 className={styles.header2}>Browse</h2>
      <BooksList books={books} />

      <h2 className={styles.header3}>Authors</h2>
      <AuthorsList authors={authors} />

      <Pagination />
    </div>
  );
};

export default Home;
