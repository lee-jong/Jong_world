import React from 'react';
import App, { Container } from 'next/app';
import BaseLayout from '../components/layout/BaseLayout';
import { tokenVaildCheck } from '../helpers/vaildCheck';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    let path = ctx.asPath.slice(0, 16);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, path };
  }

  componentDidMount() {
    const { path } = this.props;
    if (path === '/developmentNote' || path === '/login') return;
    tokenVaildCheck(sessionStorage.getItem('token'));
  }

  render() {
    const { Component, pageProps, path } = this.props;
    return (
      <Container>
        {path !== '/developmentNote' && path !== '/login' ? (
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </Container>
    );
  }
}

export default MyApp;
