import React from 'react';
import Link from 'next/link';
import {
  Row, Col,
} from 'reactstrap';
import PropTypes from 'prop-types';

const ProductList = ({ data }) => {

  const products = () => data.map(product => (
    <section>
      <Row key={product.id} className="product-list">
        <Col className="product-list__wrapper-picture">
          <Link href={`/items/${product.id}`}>
            <a href={`/items/${product.id}`}>
              <div className="product-list__picture" style={{ background: `url(${product.picture}) center center / contain no-repeat` }} />
            </a>
          </Link>
        </Col>
        <Col className="product-list__wrapper-info">
          <Row noGutters>
            <Col>
              <Link href={`/items/${product.id}`}>
                <a href={`/items/${product.id}`} className="product-list__link">
                  <h2 className="product-list__price">
                    <span className="product-list__currency">$</span>
                    {product.price.decimals.toLocaleString('pt-BR')}
                  </h2>
                </a>
              </Link>
              <Link href={`/items/${product.id}`}>
                <a href={`/items/${product.id}`} className="product-list__link">
                  <h1 className="product-list__title">{product.title}</h1>
                </a>
              </Link>
            </Col>
            <Col xs="3"><p className="product-list__state">{product.seller_address.state.name}</p></Col>
          </Row>
        </Col>
        <Col xs="12"><hr /></Col>
      </Row>
    </section>
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
