import React, { useLayoutEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Home from '../pages/home/Home';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
// import ScrollToTop from '../component/ScrollToTop/ScrollToTop';

import Blockchain from '../pages/blockchain/Blockchain';
import AI from '../pages/Ai/AI';
import Consulting from '../pages/consulting/Consulting';
import AboutUs from '../pages/AboutUs/AboutUs';
import Web2 from '../pages/web2/Web2';

import BlogDetails from '../pages/Blogs/blogdetails/BlogDetails';
import Blog1 from '../pages/Blogs/BlogSingles/blog1/Blog1';
import Blog2 from '../pages/Blogs/BlogSingles/blog2/Blog2';
import Blog3 from '../pages/Blogs/BlogSingles/blog3/Blog3';
import Blog4 from '../pages/Blogs/BlogSingles/blog4/Blog4';

const AppRouter = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      {/* <ScrollToTop />  */}

      <Header />

      <main className="page-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blockchain' element={<Blockchain />} />
          <Route path='/Ai' element={<AI />} />
          <Route path='/consulting' element={<Consulting />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/web2' element={<Web2 />} />

          {/* BLOG */}
          <Route path='/blogs-details' element={<BlogDetails />} />
          <Route path='/blogs1' element={<Blog1 />} />
          <Route path='/blogs2' element={<Blog2 />} />
          <Route path='/blogs3' element={<Blog3 />} />
          <Route path='/blogs4' element={<Blog4 />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default AppRouter;