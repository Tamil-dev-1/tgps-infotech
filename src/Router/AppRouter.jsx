import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home';
import Aboutfrec from '../pages/aboutfrec/Aboutfrec';
import Governance from '../pages/governance/Governance';
import Developer from '../pages/build_page/developer/Developer';
import Doc from '../pages/build_page/doc/Doc';
import Ecosystem from '../pages/ecosystem/Ecosysytem';
import OurProduct from '../pages/ecosystem/OurProduct';
import StakeEarn from '../pages/getstarted/StakeEarn';
import Header from '../component/header/Header';
import Whitepaper from '../pages/research/Whitepaper';
import Roadmap from '../pages/research/Roadmap';
import Footer from '../component/footer/Footer';
import Faq from '../pages/learn/Faq';
import Blog from '../pages/blog/Blog';
import AllEvents from '../pages/allevents/AllEvents'
import Frecx from '../pages/frecX/Frecx'
import ScrollToTop from '../component/ScrollToTop/ScrollToTop';
import Blog1 from '../pages/blog pages/Blog1/Blog1';
import Blog2 from '../pages/blog pages/Blog2/Blog2';
import Blog3 from '../pages/blog pages/Blog3/Blog3';
import Blog4 from '../pages/blog pages/Blog4/Blog4'
import Blog5 from '../pages/blog pages/Blog5/Blog5';
import Blog6 from '../pages/blog pages/Blog6/Blog6'
import Blog7 from '../pages/blog pages/Blog7/Blog7';
import Blog8 from '../pages/blog pages/Blog8/Blog8';
import Blog9 from '../pages/blog pages/Blog9/Blog9';
import Blog10 from '../pages/blog pages/Blog10/Blog10';
import Event1 from '../pages/Eventpages/Event1';
import FrecxGuid from '../pages/frecxGuidPage/FrecxGuid';
import CreateFrec from '../pages/createFrecPage/CreateFrecx';
import UseAWallet from '../pages/createFrecPage/useAwallet/UseAWallet';
import FcCommunityHub  from '../pages/fcCommunityHub/FcCommunityHub';
const AppRouter = () => {
  return (
    <>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
       <Route path= 'about-frecx' element={<Aboutfrec />} />
       <Route path= '/governance' element={<Governance/>} />
       <Route path= '/developer' element={<Developer />} />
       <Route path= '/doc' element={<Doc />} />
       <Route path= '/eco-system' element={<Ecosystem />} />
       <Route path= '/ourproduct' element={<OurProduct />} />
       <Route path= '/stake-earn' element={<StakeEarn />} />
       <Route path= '/whitepaper' element={<Whitepaper />} />
       <Route path= '/roadmap' element={<Roadmap />} />
       <Route path= '/faq' element={<Faq />} />
       <Route path= '/blog' element={<Blog />} />
       <Route path= '/all-events' element={<AllEvents />} />
       <Route path= '/frecx' element={<Frecx />} />
        <Route path="/blog-1" element={<Blog1 />} />
        <Route path="/blog-2" element={<Blog2 />} />
        <Route path="/blog-3" element={<Blog3 />} />
        <Route path="/blog-4" element={<Blog4 />} />
        <Route path="/blog-5" element={<Blog5 />} />
        <Route path="/blog-6" element={<Blog6 />} />
        <Route path="/blog-7" element={<Blog7 />} />
        <Route path="/blog-8" element={<Blog8 />} />
        <Route path="/blog-9" element={<Blog9 />} />
        <Route path="/blog-10" element={<Blog10 />} />
        <Route path="/event" element={<Event1 />} />
        <Route path="/frecx-guid" element={<FrecxGuid />} />
        <Route path="/create-accound" element={<CreateFrec />} />
        <Route path="/use-wallet" element={<UseAWallet />} />
        <Route path="/communityhub" element={<FcCommunityHub />} />
       
      </Routes>
      <Footer />
    </>
  )
}

export default AppRouter
