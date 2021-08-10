import { FC } from "react";
import { useRouter } from "next/router";
import { IBooks } from "../../../types";
import BooksItem from "./BooksItem";
import styles from "../Home.module.scss";

interface BooksProps {
  books: IBooks[];
}

const Books: FC<BooksProps> = ({ books }) => {
  const router = useRouter();

  return (
    <div className={styles.booksList} id="booksList">
      {books.map((book) => (
        <BooksItem
          key={book.id}
          onClick={() => router.push(`/books/${book.id}`)}
          book={book}
        />
      ))}
    </div>
  );
};

export default Books;
