import { useRouter } from "next/router";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import nextWithApollo from "next-with-apollo";
import { JsonApiLink } from "apollo-link-json-api";

const link = new JsonApiLink({
  uri: "http://jsonapiplayground.reyesoft.com/v2/",
});

const withApollo = nextWithApollo(
  ({ initialState, headers }) => {
    return new ApolloClient({
      ssrMode: typeof window === "undefined",
      link: link as unknown as ApolloLink,
      headers: {
        ...(headers as Record<string, string>),
      },
      cache: new InMemoryCache().restore(initialState ?? {}),
    });
  },
  {
    render: function Render({ Page, props }) {
      const router = useRouter();

      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    },
  }
);

export default withApollo;
