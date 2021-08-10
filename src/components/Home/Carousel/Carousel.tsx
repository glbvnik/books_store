import { FC } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IBooks } from "../../../types";
import Card from "./Card";
import styles from "../Home.module.scss";

interface CarouselPops {
  books: IBooks[];
}

const Carousel: FC<CarouselPops> = ({ books }) => {
  let counter = 0;

  const handleClick = (sign: "+" | "-") => {
    const carousel = document.getElementById("carousel")!;
    const carouselImages = document.querySelector("#card")!;

    const size = carouselImages.clientWidth + 24;

    const transform = (counter: number) =>
      (carousel.style.transform = `translate(${-size * counter}px)`);

    if (counter === 5 && sign === "+") {
      counter = 0;

      return transform(counter);
    } else if (counter === 0 && sign === "-") {
      counter = 5;

      return transform(counter);
    }

    if (sign === "+") {
      ++counter;

      return transform(counter);
    }

    --counter;

    transform(counter);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel} id="carousel">
        {books.map((book) => (
          <Card key={book.id} book={book} />
        ))}
      </div>
      <div className={styles.arrows}>
        <IoIosArrowBack onClick={() => handleClick("-")} />
        <IoIosArrowForward onClick={() => handleClick("+")} />
      </div>
    </div>
  );
};

export default Carousel;
