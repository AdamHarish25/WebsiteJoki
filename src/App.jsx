import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router';
import Solution from './Pages/Solusi';
import Portfolio from './Pages/Portfolio';
import AboutUs from './Pages/AboutUs';
import Blog from './Pages/Blog';
import Home from './Pages/Home';
import Navbar from './Component/Navbar';
import Blog1 from './Pages/Blog/PenerapanSEOIT';
import Blog2 from './Pages/Blog/PenerapanFNB';
import Blog3 from './Pages/Blog/PenerapanSelling';
import LandingPage from './Pages/Services/landingpeg';
import Footer from './Component/Footer';
import WhatsappButton from './Component/WAFloatButton';
import GoogleSEO from './Pages/Services/GoogleSeo';

function App() {

  return (
    <div className='relative'>
      <Navbar/>
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Solution" element={<Solution/>} />
          <Route path="Portfolio" element={<Portfolio/>} />
          <Route path="AboutUs" element={<AboutUs/>} />
          <Route path="Blog" element={<Blog/>} />
          <Route path='Blog1' element={<Blog1/>}/>
          <Route path='Blog2' element={<Blog2/>}/>
          <Route path='Blog3' element={<Blog3/>}/>
          <Route path= "LandingPage" element={<LandingPage/>}/>
          <Route path='G-ads' element={<GoogleSEO/>}/>
        </Routes>

        <WhatsappButton/>
        <Footer />
    </div>
  )
}

export default App
