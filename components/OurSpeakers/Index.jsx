import { useRef, useState } from "react";
import YellowButton from "../shared/YellowButton" ; 
import Image from "next/image";
import RightArrow from "../../images/sectionsAssets/rightArrow.png" ; 
import LeftArrow from "../../images/sectionsAssets/leftArrow.png" ; 
import Maqam from "../../images/shapes/GDGAlgiers.png" ; 
import globe from "../../images/shapes/globe.png" ; 
import atom from "../../images/shapes/atom.png" ; 
import Speaker from "../../images/sectionsAssets/speaker1.png" ; 
import SectionTitle from "../../components/shared/SectionTitle"; 


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const OurSpeakers = () => {
    const swiperRef = useRef(null)


    const speakers = [
        {
            image: Speaker,
            name: 'Spaker1'
        },
        {
            image: Speaker,
            name: 'Spaker2'
        },
        {
            image: Speaker,
            name: 'Spaker3'
        },
        {
            image: Speaker,
            name: 'Spaker4'
        },
        {
            image: Speaker,
            name: 'Spaker5'
        },
    ]
    
    return <div >
         <SectionTitle title={"Our Partners"} />
       
    
          <div className=" visible absolute sm:right-[25px] sm:top-[762px] md:right-[97px] md:top-[1300px] lg:right-[100px] lg:top-[130px] z-25 sm:w-[32px] sm:h-[32px] md:w-[55px] md:h-[55px] lg:w-[82px] lg:h-[82px]">
              <Image src={Maqam} alt="maqam" layout="fill" />
          </div>

          <div className=" visible absolute sm:right-[25px] sm:top-[762px] md:right-[97px] md:top-[1300px] lg:right-[100px] lg:top-[130px] z-25 sm:w-[32px] sm:h-[32px] md:w-[55px] md:h-[55px] lg:w-[82px] lg:h-[82px]">
              <Image src={globe} alt="globe" layout="fill" />
          </div>

         
      <div className="flex flex-row items-center justify-center p-30 m-20 space-x-4 md:space-x-8 lg:space-x-10">
           <div onClick={() => {swiperRef.current.swiper.slidePrev() }} className=" flex justify-center align-center w-[90px]  md:w-[200px]  lg:w-[333px]">
            <Image src={LeftArrow} alt=""  />
           </div>

        <Swiper
            ref={swiperRef}
          spaceBetween={10}
         
            breakpoints ={{
                640: {
                    slidesPerView:1
                },
                800:{
                    slidesPerView:2 
                }, 
                1048 : 
                {
                    slidesPerView:3
                }
                
              
            }}
         >
     
        {
            speakers.map((spk, idx) => {
                return <SwiperSlide key={idx} >
                    {({isActive, isNext, isPrev}) => (
                        <div  className={`${isActive ? 'scale-75' : (isPrev||isNext ? 'scale-100': 'scale-75')}`} >
                        <div className="shadow border-4 border-qiskit-black ">
                            <Image src={spk.image} alt=""/>
                        </div>
                 
                         <div className="relative z-20 -mt-16 ">
                            <YellowButton title={spk.name}/>
                         </div>
                </div>)}
                    
                 
            </SwiperSlide>
            })
        }
            </Swiper>

        <div onClick={() => {swiperRef.current.swiper.slideNext() ; 
    }} className=" flex justify-center align-center w-[90px] md:w-[200px] lg:w-[333px]">
  <Image src={RightArrow} alt=""  />
        </div>

       
     </div>
     
     <div className="visible md:hidden absolute w-[60px] h-[60px] bottom-0 left-0">
          <Image src={atom} alt="atom" layout="fill" />
     </div>

     <div className="md:hidden visible absolute left-0 top-0 z-25 sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]">
           <Image src={atom} alt="atom" layout="fill" />
     </div>



    </div>
    
} 

export default OurSpeakers