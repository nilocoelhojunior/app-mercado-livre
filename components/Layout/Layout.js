import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import Search from '../Search/Search';
import '../../style/index.scss';

export default ({
  children,
  title = 'Mercado Livre',
  description = 'A maior Comunidade de compra e venda online da América Latina.',
  picture = 'https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <meta httpEquiv="cleartype" content="on" />
      <link rel="shortcut icon" href="https://http2.mlstatic.com/ui/navigation/4.4.2/mercadolibre/favicon.ico" />
      <link rel="apple-touch-icon" href="https://http2.mlstatic.com/ui/navigation/4.4.2/mercadolibre/60x60-precomposed.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="https://http2.mlstatic.com/ui/navigation/4.4.2/mercadolibre/76x76-precomposed.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="https://http2.mlstatic.com/ui/navigation/4.4.2/mercadolibre/120x120-precomposed.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="https://http2.mlstatic.com/ui/navigation/4.4.2/mercadolibre/152x152-precomposed.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      // Facebook
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http:localhost:3000" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={picture} />
      // Twitter
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="http://localhost:3000" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={picture} />
    </Head>
    <Search onClick={search => Router.push(`/items?search=${search}`)} />
    <main>
      {children}
    </main>
  </div>
);
