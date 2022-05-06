import React, { useContext } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import GlobalCss from "./styledComponents/global.css";
import { Title } from "./styledComponents";
import DataContextProvider from "./contexts/DataContext";
import DataDisplay from './components/DataDisplay/DataDisplay'

import Switches from "./components/Switches/Switches";
import { LanguageContext } from "./contexts/LangagueContext";

const { REACT_APP_API_URL } = process.env

const client = new ApolloClient({
  uri: REACT_APP_API_URL,
  cache: new InMemoryCache()
});

  const App = () => {
    const { selectedLang } = useContext(LanguageContext)
    
    return (
    <ApolloProvider client={client}>
          <DataContextProvider>
            <GlobalCss />
            <Title>{selectedLang.title}</Title>
            <Switches />
            <DataDisplay/>
          </DataContextProvider>
    </ApolloProvider>
  )
};
export default App;
