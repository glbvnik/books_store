import { FC } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../lib/withApollo";
import { getAllAuthors, getAllBooks } from "../graphql/queries";
import convertAuthors from "../utils/convertAuthors";
import convertBooks from "../utils/convertBooks";
import Home from "../components/Home/Home";
import Loader from "../components/Loader/Loader";

const Index: FC = () => {
  const router = useRouter();

  const page = +router.query.page!;

  const { data, loading } = useQuery(getAllBooks(page, 9));
  const { data: carouselBooks, loading: carouselBooksLoading } = useQuery(
    getAllBooks(5, 6)
  );

  const { data: authors, loading: authorsLoading } = useQuery(
    getAllAuthors(page)
  );

  if (loading || carouselBooksLoading || authorsLoading)
    return <Loader />;

  return (
    <>
      <Home
        authors={convertAuthors(authors)}
        books={convertBooks(data)}
        carouselBooks={convertBooks(carouselBooks)}
      />
    </>
  );
};

export default withApollo(Index, { getDataFromTree });
