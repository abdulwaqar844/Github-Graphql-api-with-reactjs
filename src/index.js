import "./App.css";
import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./App";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";


  // Create the http link
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  // Generate and set the header with the auth details
  const authLink = setContext((_, { headers }) => {
    const token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

    // return the headers to the context so httpLink can read them
     // return the headers to the context so httpLink can read them
     return {
      headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
      }
  }
});
  // Generate your client with the authLink and httpLink
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  ReactDOM.render(
    <ApolloProvider client={client}>
      <Home />
      </ApolloProvider>,
    document.getElementById('root')
  );
