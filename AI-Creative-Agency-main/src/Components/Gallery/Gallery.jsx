import React from "react";
import Marquee from "react-fast-marquee";
import { galleryItem, galleryItem2 } from "../../../public/allData";
import FadeIn from "../Motion/FadeIn";

const Gallery = () => {
  return (
    <div className="bg-blackClr">
         <div className="md:w-[500px] w-full mx-auto pt-10 pb-4">
         <FadeIn delay={0.4} direction="up">
                    <h2 className='text-[30px] md:text-[48px] text-center text-whiteClr lg:text-[48px] font-bold  leading-[35px] md:leading-[48px] lg:leading-[50px] '>ENJOY OUR <span className='text-primaryClr'>LATEST</span>  GALLERY</h2>
                    </FadeIn>
                    <div className="flex items-center gap-3 justify-center">
                    <div className='border-[2px] rounded lg:my-8 my-6 border-whiteClr w-[100px]'></div> 
                    <h2 className="text-primaryClr tracking-wider">OUR WORK</h2>
                    <div className='border-[2px] rounded lg:my-8 my-6 border-whiteClr w-[100px]'></div> 
                    </div>
         </div>
    
        <Marquee
          className="grid grid-cols-1 lg:grid-cols-6"
          Type="right"
          Required
        >
          {galleryItem.map((item, id) => (
            <FadeIn key={id} delay={(item + 1) * 0.3} direction="up">
              <div>
                <img
                  className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded"
                  src={item.image}
                  alt=""
                />
              </div>
            </FadeIn>
          ))}
        </Marquee>
        <Marquee
          className="grid grid-cols-1 lg:grid-cols-6"
          direction	="right"
         
        >
          {galleryItem2.map((item, id) => (
            <FadeIn key={id} delay={(item + 1) * 0.3} direction="up">
              <div>
                <img
                  className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded"
                  src={item.image}
                  alt=""
                />
              </div>
            </FadeIn>
          ))}
        </Marquee>
      </div>
   
  );
};

export default Gallery;
