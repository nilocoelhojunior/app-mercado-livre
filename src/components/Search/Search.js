import React from 'react';
import {
  Button, Container, Row, Col, Input, InputGroup, InputGroupAddon,
} from 'reactstrap';
import PropTypes from 'prop-types';

import LogoML from '../../assets/images/LogoML.png';
import icSearch from '../../assets/images/icSearch.png';

const Search = ({ onClick }) => (
  <div className="searchBar">
    <Container>
      <Row>
        <Col xs="1"><img src={LogoML} alt="Mercado Livre" /></Col>
        <Col xs="11">
          <InputGroup>
            <Input placeholder="Buscar produtos, marcas e muito mais..." />
            <InputGroupAddon addonType="append">
              <Button color="link" type="button" title="Buscar" onClick={onClick}>
                <img src={icSearch} alt="Buscar" />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  </div>
);

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Search;
