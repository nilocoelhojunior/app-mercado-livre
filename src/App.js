import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import style from './assets/styles/app.scss';

import Routes from './routes/routes';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
