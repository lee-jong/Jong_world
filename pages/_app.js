import React from 'react';
import App, { Container } from 'next/app';
import BaseLayout from '../components/layout/BaseLayout';

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    let path = router.route.slice(0, 16);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps, path };
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
