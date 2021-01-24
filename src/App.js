import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from 'components/navbar';
import { BASE_URL } from 'constants/common';
import Navigation from 'navigation';
import { UserDataContext } from 'context';

const httpLink = new HttpLink({
  uri: `${BASE_URL}/api`
});

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  defaultOptions
});

const App = () => {
  const [userData, setUserData] = useState(null);

  return (
    <ApolloProvider client={client}>
      <UserDataContext.Provider value={{ userData, setUserData }}>
        <Router>
          {userData !== null && <Navbar />}
          <div className={userData !== null ? "layout" : ""}>
            <Navigation />
          </div>
          <ToastContainer />
        </Router>
      </UserDataContext.Provider>
    </ApolloProvider>
  );
}

export default App;
