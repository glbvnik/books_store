import { FC } from "react";
import Image from "next/image";
import { IBooks } from "../../../types";
import styles from "../Home.module.scss";

interface BooksItemProps {
  book: IBooks;
  onClick: () => void;
}

const BooksItem: FC<BooksItemProps> = ({ book, onClick }) => {
  return (
    <div className={styles.booksItem} onClick={onClick}>
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
      <div className={styles.bookContent}>
        <h4>{book.title}</h4>
        <p>By {book.author}</p>
      </div>
    </div>
  );
};

export default BooksItem;
