import { FC } from "react";
import Image from "next/image";
import { IBook } from "../../types";
import styles from "./Book.module.scss";

interface BookProps {
  book: IBook;
}

const Book: FC<BookProps> = ({ book }) => {
  return (
    <div className={styles.bookGrid}>
      <div className={styles.bookData}>
        <h3>{book.title}</h3>

        <div>
          <p>Author: {book.author}</p>
          <p>Series: {book.series.replace("Series", "")}</p>
          <p>ISBN: {book.isbn}</p>
          <p>Published: {book.datePublished}</p>
        </div>
      </div>

      <div className={styles.bookPhoto}>
        <Image
          alt={book.title}
          layout="fill"
          loading="eager"
          objectFit="cover"
          objectPosition="50% 50%"
          src={book.photo}
        />
      </div>

      <div className={styles.bookChapters}>
        <h2>Chapters</h2>

        {book.chapters.map((c, id) => (
          <div key={id} className={styles.chapter}>
            {c.title}
          </div>
        ))}
      </div>

      <div className={styles.bookStores}>
        <h2>Stores</h2>

        {book.stores.map((s, id) => (
          <div key={id} className={styles.store}>
            {s.name}: {s.address}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Book;
