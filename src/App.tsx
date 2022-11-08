import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './assets/styles/global';
import Routes from './routes';

export default function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes />
    </Router>
  );
}
