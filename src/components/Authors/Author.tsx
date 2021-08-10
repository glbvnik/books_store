import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { IAuthor } from "../../types";
import styles from "./Authors.module.scss";

interface AuthorProps {
  author: IAuthor;
}

const Author: FC<AuthorProps> = ({ author }) => {
  const router = useRouter();

  return (
    <div className={styles.authorContainer}>
      <div className={styles.authorData}>
        <h3>{author.name}</h3>
        <p>Birth: {author.dateOfBirth}</p>
        {author.dateOfDeath && <p>Death: {author.dateOfDeath}</p>}
        <p>Birthplace: {author.birthplace}</p>
      </div>
      <div className={styles.authorPhoto}>
        <Image
          alt={author.name}
          layout="fill"
          loading="eager"
          objectFit="cover"
          objectPosition="50% 50%"
          src={author.photo}
        />
      </div>

      <div className={styles.authorBooks}>
        <h2>Books</h2>
        {author.books.map((book, id) => (
          <div
            key={book.id}
            onClick={() => router.push(`/books/${book.id}`)}
            className={styles.book}
          >
            {id + 1}. {book.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
