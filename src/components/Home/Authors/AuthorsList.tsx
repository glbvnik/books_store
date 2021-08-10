import { FC } from "react";
import { useRouter } from "next/router";
import { IAuthors } from "../../../types";
import styles from "../Home.module.scss";
import AuthorsItem from "./AuthorsItem";

interface AuthorsListProps {
  authors: IAuthors[];
}

const AuthorsList: FC<AuthorsListProps> = ({ authors }) => {
  const router = useRouter();

  return (
    <div className={styles.authorsList} id="authorsList">
      {authors.map((author) => (
        <AuthorsItem
          key={author.id}
          onClick={() => router.push(`/authors/${author.id}`)}
          author={author}
        />
      ))}
    </div>
  );
};

export default AuthorsList;
