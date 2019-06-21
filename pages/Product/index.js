import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button, Col, Container, Card, CardBody, Row,
} from 'reactstrap';

import { Breadcrumb, Layout } from '../../components';

function Product(props) {
  const { data: { item, categories } } = props;

  const renderDecimalPart = (value) => {
    if (value < 9) {
      return `0${value}`;
    }
    return value;
  };

  const renderDescription = description => description.split('\n').map(text => (
    <React.Fragment key={`${Math.random()}-${Date.now()}`}>
      {text}
      <br />
    </React.Fragment>
  ));

  const getDescription = () => `${item.title} por ${item.price.amount.toLocaleString('pt-BR')},${renderDecimalPart(item.price.decimals)}`;

  const renderProduct = () => (
    <Layout title={item.title} description={getDescription()} picture={item.picture}>
      <Container>
        <Breadcrumb data={categories} />
        <Card>
          <CardBody className="product">
            <Row noGutters>
              <Col xs="8">
                <Row noGutters>
                  <div className="product__wrapper-detail">
                    <Row noGutters>
                      <img src={item.picture} className="product_picture" alt={item.title} />
                    </Row>
                    <Row noGutters>
                      <h3 className="product__description_title">Descrição do Produto</h3>
                      <div className="product__description_text">
                        {renderDescription(item.description)}
                      </div>
                    </Row>
                  </div>
                </Row>
              </Col>
              <Col xs="4">
                <div className="product__info">
                  <p className="product__meta">
                    {`${item.condition === 'used' ? 'Usado' : 'Novo'} - ${item.sold_quantity} vendidos`}
                  </p>
                  <h1 className="product__title">{item.title}</h1>
                  <h2 className="product__price">
                  $
                    {item.price.amount.toLocaleString('pt-BR')}
                    <span className="product__price__decimal">{renderDecimalPart(item.price.decimals)}</span>
                  </h2>
                  <Button block color="primary">Comprar</Button>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </Layout>
  );

  const renderEmptyProduct = () => (
    <Layout>
      <Container>
        <Breadcrumb />
        <Card>
          <CardBody className="product">
            <h1>Produto não encontrado! Tente novamente</h1>
          </CardBody>
        </Card>
      </Container>
    </Layout>
  );

  return !item ? renderProduct() : renderEmptyProduct();
}

Product.getInitialProps = props => ({ ...props.query });

Product.propTypes = {
  data: PropTypes.shape({ item: PropTypes.object }),
};

Product.defaultProps = {
  data: {
    item: {},
  },
};

export default Product;
