import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Card, CardBody,
} from 'reactstrap';

import { Breadcrumb, ProductList } from '../../components';

function SearchResult(props) {
  const getData = () => {
    const { data } = props;
    return data.results ? data.results : [];
  };

  return (
    <Container>
      <Breadcrumb />
      <Card>
        <CardBody>
          <ProductList data={getData()} onClick={() => {}} />
        </CardBody>
      </Card>
    </Container>
  );
}

SearchResult.getInitialProps = props => ({ ...props.query });

SearchResult.propTypes = {
  data: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.any),
  }),
};

SearchResult.defaultProps = {
  data: {
    results: [],
  },
};

export default SearchResult;
