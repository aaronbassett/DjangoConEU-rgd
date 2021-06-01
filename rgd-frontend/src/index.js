import "./index.css"

import { ApolloClient, InMemoryCache } from "@apollo/client"

import { ApolloProvider } from "@apollo/client/react"
import App from "./App"
import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"

const client = new ApolloClient({
  uri: "http://localhost:8000/api/",
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
