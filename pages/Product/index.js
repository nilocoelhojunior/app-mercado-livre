import React from 'react';
import {
  Button, Col, Container, Card, CardBody, Row,
} from 'reactstrap';

import { Breadcrumb } from '../../components';

function Product() {
  return (
    <Container>
      <Breadcrumb />
      <Card>
        <CardBody className="product">
          <Row noGutters>
            <Col xs="8">
              <Row noGutters>
                <div className="product__wrapper-detail">
                  <Row noGutters>
                    <img src="https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/LvUAAOSwGW9aoqKJ/$_57.JPG?set_id=8800005007" className="product_picture" alt="product" />
                  </Row>
                  <Row noGutters>
                    <h3 className="product__description_title">Descrição do Produto</h3>
                    <p className="product__description_text">
                    Aenean quis odio sed enim aliquam ornare. Nulla at sapien orci. Curabitur euismod nibh quis ligula molestie interdum. Phasellus gravida libero in arcu semper, ut euismod justo iaculis. Vivamus rutrum sem augue, ac rutrum lorem congue id. Ut aliquet dolor ac nibh tempus aliquam. Mauris non egestas enim. Mauris a ligula ex. Quisque eget varius sapien, vel dictum velit. Ut commodo faucibus lacus ut suscipit. Vivamus id rhoncus libero. Mauris non neque eget leo tincidunt rhoncus.
                    </p>
                  </Row>
                </div>
              </Row>
            </Col>
            <Col xs="4">
              <div className="product__info">
                <p className="product__meta">Novo - 234 vendidos</p>
                <h1 className="product__title">Ipod Touch 32GB</h1>
                <h2 className="product__price">
                  $ 1.980
                  <span className="product__price__decimal">00</span>
                </h2>
                <Button block color="primary">Comprar</Button>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Product;
