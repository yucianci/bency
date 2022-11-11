import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './assets/styles/global';
import Header from './components/Header';
import Routes from './routes';

export default function App() {
  return (
    <Router>
      <Header />
      <GlobalStyles />
      <Routes />
    </Router>
  );
}
