import React from 'react';
import { Breadcrumb as BSBreadcrumb, BreadcrumbItem } from 'reactstrap';

function Breadcrumb() {
  return (
    <BSBreadcrumb tag="nav" listTag="div">
      <BreadcrumbItem tag="a" href="#">Eletrônica, Áudio de Vídeo</BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">iPod</BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">Players</BreadcrumbItem>
      <BreadcrumbItem tag="a" href="#">iPod Touch</BreadcrumbItem>
      <BreadcrumbItem active tag="span">32gb</BreadcrumbItem>
    </BSBreadcrumb>
  );
}

export default Breadcrumb;
