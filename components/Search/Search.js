import React, { useState } from 'react';
import {
  Button, Container, Row, Col, Input, InputGroup, InputGroupAddon,
} from 'reactstrap';
import PropTypes from 'prop-types';

const Search = ({ onClick }) => {
  const [search, setSearch] = useState('');

  const handerClick = (event) => {
    event.preventDefault();
    onClick(search);
  };

  const handleKeyPress = (event) => {
    console.log(event);
  };

  return (
    <header className="searchBar">
      <Container>
        <Row>
          <Col xs="1"><img src="/static/images/LogoML.png" alt="Mercado Livre" /></Col>
          <Col xs="11">
            <InputGroup>
              <Input
                onChange={event => setSearch(event.target.value)}
                placeholder="Buscar produtos, marcas e muito mais..."
                className="searchBar__input"
                onKeyPress={handleKeyPress}
              />
              <InputGroupAddon addonType="append">
                <Button color="link" type="button" title="Buscar" onClick={handerClick}>
                  <img src="/static/images/icSearch.png" alt="Buscar" />
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Search.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Search;
