import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb as BSBreadcrumb, BreadcrumbItem } from 'reactstrap';

function Breadcrumb({ data }) {
  const renderItem = () => data.map((item, index) => <BreadcrumbItem key={item} active={index - 1 === data.length} tag="a" href="#">{item}</BreadcrumbItem>);

  return (
    <BSBreadcrumb tag="nav" listTag="div">
      {renderItem()}
    </BSBreadcrumb>
  );
}

Breadcrumb.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};

Breadcrumb.defaultProps = {
  data: [],
};


export default Breadcrumb;
