import React from 'react';
import '../style.scss';

import Footer from '../footer.js';
import Header from '../header.js';

export default function Home(props) {
  const { children } = props;
  return (
    <>
      <div className=" min-vh-100">
        <Header />
        <div className="">{children}</div>
        <Footer />
      </div>
    </>
  );
}
