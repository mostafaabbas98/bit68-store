import Head from 'next/head';

import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Bit68</title>
        <meta name="description" content="Bit68 store" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
