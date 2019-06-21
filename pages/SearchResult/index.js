import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import {
  Container, Card, CardBody,
} from 'reactstrap';

import { Breadcrumb, Layout, ProductList } from '../../components';

function SearchResult(props) {
  const getData = () => {
    const { data } = props;
    return data.items ? data.items : [];
  };

  const getPageTitle = () => {
    const { search } = props;
    return search ? `${search.toLocaleUpperCase()} no Mercado Livre` : 'Mercado Livre';
  };

  return (
    <Layout title={getPageTitle()}>
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
    </Layout>
  );
}

SearchResult.getInitialProps = props => ({ ...props.query });

SearchResult.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.any),
  }),
  query: PropTypes.string,
};

SearchResult.defaultProps = {
  data: {
    items: [],
  },
  query: '',
};

export default SearchResult;
