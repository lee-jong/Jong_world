import React from 'react';
import Head from 'next/head';
import '../../styles/assets/css/main.css';

const Meta = () => {
  return (
    <Head>
      <head>
        <title>Hello, Jong's Word</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <script src="../../styles/assets/js/jquery.min.js" />
        <script src="../../styles/assets/js/browser.min.js" />
        <script src="../../styles/assets/js/breakpoints.min.js" />
        <script src="../../styles/assets/js/util.js" />
        <script src="../../styles/assets/js/main.js" />
      </head>
    </Head>
  );
};

export default Meta;
