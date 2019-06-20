import React from 'react';
import {
  Container, Card, CardBody,
} from 'reactstrap';

import { Breadcrumb, ProductList } from '../../components';

const data = [
  {
    id: 1,
    picture: 'https://photos5.appleinsider.com/gallery/31559-52968-Apple-iPods-l.jpg',
    price: '1980',
    description: 'Apple iPod Touch 5g 16gb. Completo!',
    state: 'Piauí',
  },
  {
    id: 2,
    picture: 'https://photos5.appleinsider.com/gallery/31559-52968-Apple-iPods-l.jpg',
    price: '1980',
    description: 'Apple iPod Touch 5g 16gb. Completo!',
    state: 'Piauí',
  },
  {
    id: 3,
    picture: 'https://photos5.appleinsider.com/gallery/31559-52968-Apple-iPods-l.jpg',
    price: '1980',
    description: 'Apple iPod Touch 5g 16gb. Completo!',
    state: 'Piauí',
  },
  {
    id: 4,
    picture: 'https://photos5.appleinsider.com/gallery/31559-52968-Apple-iPods-l.jpg',
    price: '1980',
    description: 'Apple iPod Touch 5g 16gb. Completo!',
    state: 'Piauí',
  },
  {
    id: 5,
    picture: 'https://photos5.appleinsider.com/gallery/31559-52968-Apple-iPods-l.jpg',
    price: '1980',
    description: 'Apple iPod Touch 5g 16gb. Completo!',
    state: 'Piauí',
  },
];

function SearchResult() {
  return (
    <Container>
      <Breadcrumb />
      <Card>
        <CardBody>
          <ProductList data={data} onClick={() => {}} />
        </CardBody>
      </Card>
    </Container>
  );
}

export default SearchResult;
