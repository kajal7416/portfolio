// import React from 'react';
import './herosection.css';

const HeroSection = () => {
  const bubbles = [
    11, 12, 24, 14, 23, 18, 16, 20, 22, 25, 18, 21, 15, 13, 26, 17, 13, 28, 23
];

  
return (
    <div className='herosection' id='home'>
        <div className='herosection1'>
            <div className='bubbles'>
                {bubbles.map((duration, index) => (
                    <span key={index} style={{ '--animation-duration': `${duration}s` }}></span>
                ))}
            </div>
        
        
      {/* contain */}
      <div className='container content'>
      <div className="intro">
      
      <p className='port' style={{fontSize: '18px'}}>Welcome to My Portfolio</p>
      <h1 className='typing-effect1'>I' M <span>KAJAL</span> YADAV</h1>
      <h1 class="typing-effect"><span>FRONT END</span> DEVELOPER</h1>
            <p>I'm a front-end developer passionate about creating beautiful and functional websites.</p>
    
            <br></br>
        <div className='box2'></div>
      </div>
    </div>
    </div>
    </div>
    );
};

export default HeroSection;





