import React from 'react'
import './assest/education.css';

export default function Education() {
  return (
    <div className='education' id='eduaction'>
      {/* <img src='/image/bag-removebg-preview.png'></img> */}
      <h1>EDUCATION</h1>
      <div className='container education-detail'>
        
        <div className='education-left'>
          <div className='tenth' data-aos="fade-right">
            <h5><i class="fa-solid fa-user-graduate"></i> 2016-2017</h5>
            <h4>10th Class</h4>
            <h3>Shital Saurabh School</h3>
          </div>
          <div className='bca' data-aos="fade-right">
          <h5><i class="fa-solid fa-user-graduate"></i> 2019-2023</h5>
            <h4>BCA Collage</h4>
            <h3>Shital Saurabh School</h3>
          </div>
        </div>
        <div className='education-right'>
          <div className='tweath' data-aos="fade-left">
          <h5><i class="fa-solid fa-user-graduate"></i> 2018-2019</h5>
            <h4>12th Class</h4>
            <h3>Shital Saurabh School</h3>
          </div>
          <div className='skytech' data-aos="fade-left">
          <h5><i class="fa-solid fa-user-graduate"></i> 2024</h5>
            <h4>Front End Developer</h4>
            <h3>Skytech IT Intern</h3>
          </div>
        </div>

      </div>
      {/* <Footer /> */}
    </div>
  )
}
