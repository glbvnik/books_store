import { FC } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { IBooks } from "../../../types";
import { BookData, CardContainer, CardImage, StyledCard } from "./StyledCard";

interface CardProps {
  book: IBooks;
}

const Card: FC<CardProps> = ({ book }) => {
  const router = useRouter();

  return (
    <StyledCard
      id="card"
      onClick={() => router.push(`books/${book.id}`)}
      photo={book.photo}
    >
      <CardContainer>
        <CardImage>
          <Image
            alt={book.title}
            layout="fill"
            loading="eager"
            objectFit="cover"
            objectPosition="50% 50%"
            src={book.photo}
          />
        </CardImage>
        <BookData>
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
        </BookData>
      </CardContainer>
    </StyledCard>
  );
};

export default Card;
