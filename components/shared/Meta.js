import React from 'react';
import Head from 'next/head';
import '../../static/styles/assets/css/main.css';
import '../../static/styles/assets/css/button.css';
import '../../static/styles/assets/css/app.css';
import '../../static/styles/assets/css/theme.css';
import '../../static/styles/assets/css/search.css';
import '../../static/styles/assets/css/popup.css';

const Meta = () => {
  return (
    <Head>
      <title>Hello, Jong's Word</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <script src="/static/styles/assets/js/jquery.min.js"></script>
      <script src="/static/styles/assets/js/browser.min.js"></script>
      <script src="/static/styles/assets/js/breakpoints.min.js"></script>
      <script src="/static/styles/assets/js/util.js"></script>
      <script src="/static/styles/assets/js/main.js"></script>
    </Head>
  );
};

export default Meta;
