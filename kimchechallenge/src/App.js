import React from "react";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Data from "./components/Data";

const { REACT_APP_API_URL } = process.env

const client = new ApolloClient({
  uri: REACT_APP_API_URL,
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <Data />
  </ApolloProvider>
);
export default App;
