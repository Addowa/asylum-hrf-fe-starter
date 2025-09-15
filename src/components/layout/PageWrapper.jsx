import Header from './Header.jsx';
import Footer from './Footer.jsx';
import * as React from 'react';

export const pageWrapper = ele => {
  // return (
  //   <>
  //     <Header />
  //     {ele}
  //     <Footer />
  //   </>
  // );
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{ele}</main>
      <Footer />
    </div>
  );
};
