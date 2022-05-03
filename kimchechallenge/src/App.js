import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Data from "./components/Data";
import GlobalCss from "./styledComponents/global.css";
import { Title } from "./styledComponents";

const { REACT_APP_API_URL } = process.env

const client = new ApolloClient({
  uri: REACT_APP_API_URL,
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <GlobalCss />
    <Title>Country Search</Title>
    <Data />
  </ApolloProvider>
);
export default App;
