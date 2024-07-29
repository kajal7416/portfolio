
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slick.css'

function Slicks() {
  
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
  
  return (
    <div className="slick" id="skills">
        <h1>Skills</h1>
        <div className="container slider-container">
      
      <Slider ref={slider => ( slider)} {...settings}>
        <div>
          <img style={{height: 'auto',width: '150px', margin: '20px auto', objectFit: 'contain'}} src="html.png"></img>
          <h1>HTML</h1>
        </div>
        <div>
       <img style={{height: 'auto',width: '150px', margin: '20px auto', objectFit: 'contain'}} src="css.png"></img>
        <h1>CSS</h1>
        </div>
        <div>
       <img style={{height: 'auto',width: '150px', margin: '20px auto', objectFit: 'contain'}} src="js.webp"></img>
        <h1>JAVASCRIPT</h1>
        </div>
        <div>
       <img style={{height: 'auto',width: '150px', margin: '20px auto', objectFit: 'contain'}} src="react.webp"></img>
        <h1>REACT</h1>
        </div>
        <div>
       <img style={{height: 'auto',width: '150px', margin: '20px auto', objectFit: 'contain'}} src="bootstrap.png"></img>
        <h1>BOOTSTRAP</h1>
        </div>
        <div>
       <img style={{height: 'auto',width: '150px', margin: '20px auto', objectFit: 'contain'}} src="figma.webp"></img>
        <h1>FIGMA</h1>
        </div>
      </Slider>
      
    </div>
    </div>
  );
}

export default Slicks;

// import React from 'react'
// import SwiperCoverflow from './slick.jsx'
// import ReactDOM from "react-dom";


// // import SwiperCoverflow from "./SwiperCoverflow";
// import "./styles.scss";

// export default function Slick() {
//   return (
//     <div>
//         <SwiperCoverflow />
//     </div>
//   )
// }
