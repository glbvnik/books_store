import { FC } from "react";
import Error from "next/error";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { getDataFromTree } from "@apollo/client/react/ssr";
import withApollo from "../../lib/withApollo";
import { getOneAuthor } from "../../graphql/queries";
import convertAuthor from "../../utils/convertAuthor";
import Author from "../../components/Authors/Author";
import Loader from "../../components/Loader/Loader";

const AuthorPage: FC = () => {
  const router = useRouter();

  const { data, loading } = useQuery(getOneAuthor(+router.query.id!));

  if (loading) return <Loader />;

  if (!data) return <Error statusCode={404} />;

  return <Author author={convertAuthor(data)} />;
};

export default withApollo(AuthorPage, { getDataFromTree });
