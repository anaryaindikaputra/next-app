// Apollo dependency
import { ApolloClient, InMemoryCache, ApolloProvider, } from "@apollo/client";

// Styles dependency
import '../styles/globals.css';
import '../styles/global_styles.css';

/**
 * @apollo Initialize Apollo Client
 * @param uri specifies the URL of the GraphQL server
 * @param cache is an instance of InMemoryCache,
 * which Apollo Client uses to cache query results after fetching them.
 */
const client = new ApolloClient({
  uri: 'https://b2cdemo.getswift.asia/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
