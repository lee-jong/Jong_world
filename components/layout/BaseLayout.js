import React from 'react';
import Header from '../shared/Header';
import Meta from '../shared/Meta';
import Footer from '../shared/Footer';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Meta />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
