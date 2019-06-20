import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';

import '../style/index.scss';

import { Search } from '../components';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Search onClick={() => Router.push('/search-result')} />
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default MyApp;
