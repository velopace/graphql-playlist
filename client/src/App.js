import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

// components
import BookList from "./componenets/BookList";

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Velopace's Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
