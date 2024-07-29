import React, { useState, useEffect, useRef } from 'react';
import Net from 'vanta/dist/vanta.net.min';
import Herosection1 from './herosection1'
import { motion } from 'framer-motion';

const MyComponent = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    if (!window.THREE) {
      // Ensure THREE is available on the window object
      console.error('THREE is not defined on the window object. Make sure three.min.js is included.');
      return;
    }

    if (!vantaEffect && myRef.current) {
      setVantaEffect(Net({
        el: myRef.current,
        // Add any additional Vanta.js options here
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  points: 5.00,
  maxDistance: 19.00,
  spacing: 12.00
      }));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={myRef} style={{ width: '100%', height: '100vh' }} id='home'>
      hi
      <Herosection1 />
      
    </div>
    
  );
}

export default MyComponent;