import Image from "next/image";
import WTM from "../../images/logos/WTMAlgiers.png";
import SectionTitle from "../shared/SectionTitle";
import GDG from "../../images/logos/GDGAlgiers.png"
import ParagSection from "../shared/ParagSection";
import YellowButton from "../shared/YellowButton";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import maqam from "../../images/shapes/GDGAlgiers.png";
const AboutUs = () => {

    return <div className=" m-0 p-0">
        <div className=" z-0 h-[60px] max-w-[100%] bg-gradient-to-t from-qiskit-blue-lighter to-qiskit-white"></div>
        
        <div className=" z-0 max-w-[100%] bg-gradient-to-b from-qiskit-blue-lighter to-qiskit-blue-normal ">
        
        <div className=" visible absolute left-[97px] top-[270px] md:left-[97px] md:top-[137px] lg:left-[100px] lg:top-[1500px] z-25 sm:w-[32px] sm:h-[32px] md:w-[55px] md:h-[55px] lg:w-[82px] lg:h-[82px]">
        <Image src={globe} alt="" layout="fill" />
        </div>
        
        <div className=" visible absolute sm:right-[25px] sm:top-[
            0px] md:right-[97px] md:top-[1300px] lg:right-[100px] lg:top-[130px] z-25 sm:w-[320px] bg-red-500 sm:h-[32px] md:w-[55px] md:h-[55px] lg:w-[82px] lg:h-[82px] ">
        <Image src={globe} alt="" layout="fill" />
        </div>

        <div className=" visible absolute sm:right-[25px] sm:top-[762px] md:right-[97px] md:top-[800px] lg:right-[100px] lg:top-[1000px] z-25 sm:w-[32px] sm:h-[32px] md:w-[55px] md:h-[55px] lg:w-[82px] lg:h-[82px]">
        <Image src={atom} alt="" layout="fill" />
        </div>

        <div className=" visible absolute sm:left-[25px] sm:top-[380px] md:left-[80px] md:top-[700px] lg:left-[120px] lg:top-[700px] z-25 sm:w-[75px] sm:h-[73px] md:w-[106px] md:h-[75px] lg:w-[160px] lg:h-[113px]">
        <Image src={maqam} alt="maqam chahid" layout="fill" />
        </div>
    
        
        <SectionTitle title={"About Us"}> </SectionTitle>
    
            <div className="  sm:mt-[49px] md:mt-[83px] lg:mt-[83px] flex flex-col space-x-12  items-center justify-center md:flex-col md:mr-20 md:ml-20 lg:flex-col lg:mr-20 lg:ml-20" >

               <ParagSection paragraph={"WTM Algiers also known as the Women Techmakers Algiers program, was created to increase visibility, community, and resources for women in technology and also spread learning and build role models globally. It's located at the National Higher School of Computer science and dedicated to anyone who passionate and motivated about the tech field."} img={WTM} reverse={false}></ParagSection> 
                
                <div className="sm:mt-[48px] md:mt-[61px] lg:mt-[63px]">
                <YellowButton title={"Visit our website"}/>
                </div>
               
            </div>
            <div className="  sm:mt-[25px] md:mt-[112px] lg:mt-[145px] flex flex-col space-x-12 items-center justify-center lg:flex-col lg:mr-20 lg:ml-20 xl:flex-col xl:mr-20 xl:ml-20" >

                <ParagSection paragraph={"GDG Algiers is a local group of developers and students who are interested in Google's developer technology products. It is located at the national school of computer sciences and hosts a variety of events activities for developers through different events that aim to help the developers community get the latest technology updates."} img={GDG} reverse={true}></ParagSection> 
                
                <div className="sm:mt-[48px] md:mt-[61px] lg:mt-[63px]">
                <YellowButton title={"Visit our website"}/>
                </div>
               
            </div>
    
       
            </div>
        <div className=" z-0 h-[100px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div>
       
    </div>
}


export default AboutUs;