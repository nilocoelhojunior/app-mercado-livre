import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from 'reactstrap';

import Routes from './routes/routes';
import { Search } from './components';

function App() {
  return (
    <Router>
      <Search />
      <Container>
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
