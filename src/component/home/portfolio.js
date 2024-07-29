import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import './assest/portfolio.css';

const CoverflowEffect = () => {
    return (
     <div className='portfolio' id='portfolio'>
        <h1>Portfolio</h1>
         <div className="container swiper-container">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={true}
          loop={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="swiper-slide img1">
                <div className='project-detail'>
                <h3>Craftycode</h3>
                <button>View Website <i class="fa-solid fa-eye"></i></button>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide img2">
                <div className='project-detail'>
                <h3>Bulk Bites</h3>
                <button>View Website <i class="fa-solid fa-eye"></i></button>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide img3">
                <div className='project-detail'>
                <h3>Form Validation</h3>
                <button>View Website <i class="fa-solid fa-eye"></i></button>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide img4">
                <div className='project-detail'>
                <h3>Flipkart Clone</h3>
                <button>View Website <i class="fa-solid fa-eye"></i></button>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide img5">
                <div className='project-detail'>
                <h3>Calculator</h3>
                <button>View Website <i class="fa-solid fa-eye"></i></button>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide img6">
                <div className='project-detail'>
                <h3>Shoot & Smile</h3>
                <button>View Website</button>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide img7">
                <div className='project-detail'>
                <h3>World Clock</h3>
                <button>View Website</button>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="swiper-slide img8">
                <div className='project-detail'>
                <h3>Weather</h3>
                <button>View Website</button>
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
     </div>
    );
  };
  
  export default CoverflowEffect;
  
