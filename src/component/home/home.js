import React, { useState, useEffect } from 'react'
import Nav from '../home/nav'
import MyComponent from '../home/hero'
import About from '../home/about'
import Skill from '../home/skill'
import CoverflowEffect from '../home/portfolio'
import Contact from '../home/contact'
import Footer from '../home/footer'
import Education from '../home/education'
import Loader from './loader'


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  
  return (
    <div>
      
        <div>
        {isLoading && <Loader />}
        <div className={isLoading ? 'hidden' : ''}></div>
          
          <Nav />
        <MyComponent />
      <div style={{ position: 'relative', zIndex: 1 }}>
      </div>
      <About />
      <Education />
      <Skill />
      <CoverflowEffect />
      <Contact />
      <Footer />
          </div>
      
  
      
    </div>
    
  )
}
