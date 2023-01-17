import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UserProvider } from './context/car.context'
import { GraphQLClient, ClientContext } from 'graphql-hooks'


const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": "Bearer e869b7597a4f2eef7a3c49e2781ec5",
  }
});




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <ClientContext.Provider value={client}>
    <UserProvider>
      <App />
    </UserProvider>
  </ClientContext.Provider>
  // </React.StrictMode>,
)
