import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import {App} from './App';
import { getAccessToken } from './accessToken';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  credentials: "include",
  request: (operation) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      operation.setContext({
        headers: {
          Authorization: `bearer ${accessToken}`
        }
      })
    }
  }
})


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,
  document.getElementById('root')
);
