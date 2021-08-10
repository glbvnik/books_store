import { FC } from "react";
import Image from "next/image";
import { IAuthors } from "../../../types";
import styles from "../Home.module.scss";

interface AuthorsItemProps {
  author: IAuthors;
  onClick: () => void;
}

const AuthorsItem: FC<AuthorsItemProps> = ({ author, onClick }) => {
  return (
    <div className={styles.authorsItem} onClick={onClick}>
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
      <h4>{author.name}</h4>
    </div>
  );
};

export default AuthorsItem;
