import React from 'react';
import {
  Row, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

const ProductList = ({ data, onClick }) => {
  const products = () => data.map(product => (
    <Row key={product.id} className="product-list">
      <Col className="product-list__wrapper-picture">
        <div className="product-list__picture" style={{ background: `#eeeeee url(${product.picture}) center center / cover` }} />
      </Col>
      <Col className="product-list__wrapper-info">
        <Row noGutters>
          <Col>
            <p className="product-list__title">
              R$
              {product.price}
            </p>
            <p className="product-list__description">{product.description}</p>
          </Col>
          <Col xs="3"><p className="product-list__state">{product.state}</p></Col>
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
