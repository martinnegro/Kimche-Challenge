import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import GlobalCss from "./styledComponents/global.css";
import { Title } from "./styledComponents";
import DataContextProvider from "./contexts/DataContext";
import DataDisplay from './components/DataDisplay'

const { REACT_APP_API_URL } = process.env

const client = new ApolloClient({
  uri: REACT_APP_API_URL,
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <DataContextProvider>
    <GlobalCss />
      <Title>Country Search</Title>
      <DataDisplay/>
    </DataContextProvider>
  </ApolloProvider>
);
export default App;
