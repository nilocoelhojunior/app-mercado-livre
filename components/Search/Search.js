import React from 'react';
import {
  Button, Container, Row, Col, Input, InputGroup, InputGroupAddon,
} from 'reactstrap';
import PropTypes from 'prop-types';

const Search = ({ onClick }) => (
  <div className="searchBar">
    <Container>
      <Row>
        <Col xs="1"><img src="/static/images/LogoML.png" alt="Mercado Livre" /></Col>
        <Col xs="11">
          <InputGroup>
            <Input placeholder="Buscar produtos, marcas e muito mais..." className="searchBar__input" />
            <InputGroupAddon addonType="append">
              <Button color="link" type="button" title="Buscar" onClick={onClick}>
                <img src="/static/images/icSearch.png" alt="Buscar" />
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
