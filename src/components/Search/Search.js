import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import LogoML from '../../assets/images/LogoML.png';
import style from './style.scss';

function Search() {
  return (
    <div className="searchBar">
      <Container>
        <Row>
          <Col xs="1"><img src={LogoML} alt="Mercado Livre" /></Col>
          <Col xs="11"><input /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default Search;
