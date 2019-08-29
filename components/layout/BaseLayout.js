import React from 'react';
import Header from '../shared/Header';
import Nav from '../shared/Nav';
import Meta from '../shared/Meta';
import Footer from '../shared/Footer';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Meta />

      <Header />
      {/* <Nav /> */}
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
