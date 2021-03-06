import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LangagueContextProvider from './contexts/LangagueContext';
import ThemeContextProvider from "./contexts/ThemeProvider";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <LangagueContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </LangagueContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
