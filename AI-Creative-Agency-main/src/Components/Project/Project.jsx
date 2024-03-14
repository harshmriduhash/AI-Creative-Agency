import React from 'react'
import FadeIn from '../Motion/FadeIn'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const Project = () => {
  return (
    <div className='bg-blackClr pb-14'>
             <div className="md:w-[500px] w-full mx-auto text-center pt-10 pb-4">
         <FadeIn delay={0.4} direction="up">
                    <h2 className='text-[30px] md:text-[48px] text-center mx-auto text-whiteClr lg:text-[48px] font-bold leading-[35px] md:leading-[48px] lg:leading-[50px] '>ENJOY OUR   <span className='text-primaryClr'>LATEST</span>PROJECTS</h2>
                    </FadeIn>
                    <div className="flex items-center gap-3 justify-center">
                    <div className='border-[2px] rounded lg:my-8 my-6 border-whiteClr w-[100px]'></div> 
                    <h2 className="text-primaryClr tracking-wider">OUR WORK</h2>
                    <div className='border-[2px] rounded lg:my-8 my-6 border-whiteClr w-[100px]'></div> 
                    </div>
         </div>
         <>
      <Swiper
      
      spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{
            delay: "2000",
          }}
        // modules={[Pagination]}
        // className="mySwiper"
      
          modules={[Autoplay]}
          breakpoints={{
            540: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
      
      >
        <SwiperSlide >
            <img className='object-cover' src="https://i.postimg.cc/y8nwg9zd/rm369-033a-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='object-cover' src="https://i.postimg.cc/1XZWY5Z2/pexels-motional-studio-1081685-1-1.png
" alt="" />
        </SwiperSlide>

        <SwiperSlide>
        <img className='object-cover' src="https://i.postimg.cc/1XZWY5Z2/pexels-motional-studio-1081685-1-1.png
" alt="" />
        </SwiperSlide>

  
      </Swiper>
    </>
    </div>
  )
}

export default Project