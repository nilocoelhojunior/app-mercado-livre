import React from 'react';
import PropTypes from 'prop-types';

import { SEARCH_RESULT } from '../../routes/constants';

import Search from '../Search/Search';

const LayoutBase = WrappedComponent => (props) => {
  const handlerSearch = (item) => {
    props.history.push(SEARCH_RESULT);
  };

  return (
    <React.Fragment>
      <Search onClick={handlerSearch} />
      <WrappedComponent />
    </React.Fragment>
  );
};

LayoutBase.propTypes = {
  WrappedComponent: PropTypes.element.isRequired,
};

export default LayoutBase;
