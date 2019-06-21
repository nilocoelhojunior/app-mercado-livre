import React from 'react';
import {
  Row, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

const ProductList = ({ data, onClick }) => {
  const products = () => data.map(product => (
    <Row key={product.id} className="product-list">
      <Col className="product-list__wrapper-picture">
        <div className="product-list__picture" style={{ background: `#eeeeee url(${product.picture}) center center / contain no-repeat` }} />
      </Col>
      <Col className="product-list__wrapper-info">
        <Row noGutters>
          <Col>
            <h2 className="product-list__price">
              <span className="product-list__currency">$</span>
              {product.price.decimals.toLocaleString('pt-BR')}
            </h2>
            <h1 className="product-list__title">{product.title}</h1>
          </Col>
          <Col xs="3"><p className="product-list__state">{product.seller_address.state.name}</p></Col>
        </Row>
      </Col>
      <Col xs="12"><hr /></Col>
    </Row>
  ));

  return (
    <div className="product-list">
      {products()}
    </div>
  );
};

ProductList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ProductList;
