import { FC } from "react";
import Error from "next/error";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../lib/withApollo";
import { getOneBook } from "../../graphql/queries";
import convertBook from "../../utils/convertBook";
import Book from "../../components/Books/Book";
import Loader from "../../components/Loader/Loader";

const BookPage: FC = () => {
  const router = useRouter();

  const { data, loading } = useQuery(getOneBook(+router.query.id!));

  if (loading) return <Loader />;

  if (!data) return <Error statusCode={404} />;

  return <Book book={convertBook(data)} />;
};

export default withApollo(BookPage, { getDataFromTree });
