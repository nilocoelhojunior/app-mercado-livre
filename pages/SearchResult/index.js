import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Card, CardBody,
} from 'reactstrap';

import { Breadcrumb, ProductList } from '../../components';

function SearchResult(props) {
  const getData = () => {
    const { data } = props;
    return data.items ? data.items : [];
  };

  return (
    <Container>
      <Breadcrumb />
      <article>
        <Card>
          <CardBody>
            <ProductList data={getData()} />
          </CardBody>
        </Card>
      </article>
    </Container>
  );
}

SearchResult.getInitialProps = props => ({ ...props.query });

SearchResult.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.any),
  }),
};

SearchResult.defaultProps = {
  data: {
    items: [],
  },
};

export default SearchResult;
