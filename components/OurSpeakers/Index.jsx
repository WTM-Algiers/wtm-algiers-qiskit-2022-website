import { useRef, useState } from "react";
import YellowButton from "../shared/YellowButton";
import Image from "next/image";
import RightArrow from "../../images/sectionsAssets/rightArrow.png";
import LeftArrow from "../../images/sectionsAssets/leftArrow.png";
import Maqam from "../../images/shapes/GDGAlgiers.png";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";
import Speaker from "../../images/sectionsAssets/speaker1.png";
import SectionTitle from "../../components/shared/SectionTitle";


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const OurSpeakers = () => {
    const swiperRef = useRef(null)


    const speakers = [
        {
            image: Speaker,
            name: 'Speaker1',
            profession: ' someone who teaches',
        },
        {
            image: Speaker,
            name: 'Speaker2',
            profession: 'professor',
        },
        {
            image: Speaker,
            name: 'Speaker3',
            profession: 'director',
        },
        {
            image: Speaker,
            name: 'Speaker4',
            profession: 'someone',
        },
        {
            image: Speaker,
            name: 'Speaker5',
            profession: 'another someone',
        },
    ]





    return <div className="relative h-screen  ">
        <SectionTitle title={"Our Partners"} />


        <div className="visible absolute sm:w-[40px] sm:h-[2rem] md:top-1/12 md:w-[55px] md:h-[55px] lg:top-1/4 lg:right-[50px] lg:top-[50px] lg:w-[100px] 2xl:w-[150px] 2xl:h-[120px] z-25 ">
            <Image src={Maqam} alt="maqam" layout="fill" />
        </div>

        <div className="visible absolute sm:w-[40px] sm:h-[2rem] md:top-1/4 md:w-[55px] md:h-[55px] lg:left-[10px] lg:top-1/4 lg:w-[82px] lg:h-[82px] z-25  ">
            <Image src={globe} alt="globetop" layout="fill" />
        </div>

        <div className="visible absolute sm:right-[25px] sm:bottom-[762px] sm:w-[40px] sm:h-[32px] md:w-[55px] md:h-[55px] lg:w-[82px] lg:h-[82px] lg:right-[100px] lg:bottom-[87px] z-25 s">
            <Image src={globe} alt="globebottom" layout="fill" />
        </div>

        <div className="hidden lg:block absolute  lg:w-[40px] bottom-[2rem] right-0 lg:bottom-0 lg:right-1/2">
            <Image src={computer} alt="computer" />
        </div>

        <div className="absolute sm:bottom-0 sm:right-0 sm:w-[45px] md:right-1/2 lg:w-[40px] top-[2rem] right-0 lg:bottom-0 lg:right-1/2">
            <Image src={atom} alt="atomtop" />
        </div>

        <div className="hidden lg:block absolute bottom-[4rem] left-0 lg:bottom-10 lg:right-1/4 lg:w-[80px] 2xl:w-[150px]">
            <Image src={atom} alt="atombotton" />
        </div>


        <div className="flex items-center md:space-x-8 sm:mt-[40px] md:mt-[100px] lg:pt-30 lg:m-20 lg:space-x-8 2xl:pt-40 2xl:mt-[230px]">
            <div onClick={() => { swiperRef.current.swiper.slidePrev() }} className="cursor-pointer  hidden md:flex  w-[200px] md:w-[120px] lg:w-1/6">
                <Image src={LeftArrow} alt="" />
            </div>

            <Swiper
                ref={swiperRef}
                spaceBetween={10}

                breakpoints={{
                    640: {
                        slidesPerView: 1
                    },
                    800: {
                        slidesPerView: 2
                    },
                    1024:
                    {
                        slidesPerView: 3
                    }


                }}
            >


                {
                    speakers.map((spk, idx) => {
                        return <SwiperSlide key={idx} >
                            {({ isActive, isNext, isPrev }) => (
                                <div className={` ${isActive ? 'lg:scale-75' : (isPrev || isNext ? 'lg:scale-100' : 'lg:scale-75')}`} >
                                    <div className="">
                                        <div className=" relative border-qiskit-black border-4 -z-10">
                                            <Image src={spk.image} alt="" />
                                        </div>

                                        <div className="retlative w-3/5 mx-auto z-10 -mt-20 ">
                                            <YellowButton title={spk.name} />
                                        </div>

                                        <div className="mx-auto flex justify-center md:-mt-2 lg:-mt-4 2xl:-mt-2">
                                            <p > {spk.profession} </p>
                                        </div>

                                    </div>

                                </div>)}

                        </SwiperSlide>
                    })
                }
            </Swiper>


            <div onClick={() => {
                swiperRef.current.swiper.slideNext();
            }} className="cursor-pointer  hidden md:flex  w-[200px] md:w-[120px] lg:w-1/6r  w-[200px] md:w-[120px] lg:w-1/6">
                <Image src={RightArrow} alt="" />
            </div>

        </div>

    </div>

}

export default OurSpeakers