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
        <div className=" z-0 h-[200px] max-w-[100%] bg-gradient-to-t from-qiskit-blue-lighter to-qiskit-white"></div>
        
        <div className="  relative z-0 max-w-[100%] bg-gradient-to-b from-qiskit-blue-lighter to-qiskit-blue-normal ">
        
        <div className="absolute  sm:top-0 md:top-[60px] lg:top-[60px] 2xl:top-[80px] left-0 w-[32px] h[32px] md:w-[40px] md:h[40px] lg:w-[55px] lg:h[55px] 2xl:w-[82px] 2xl:h[82px] ">
        <Image src={globe} />
        </div>

        <div className="absolute bottom-0 right-0  w-[32px] h[32px] md:w-[40px] md:h[40px] lg:w-[55px] lg:h[55px] 2xl:w-[82px] 2xl:h[82px]">
        <Image src={globe} />
        </div>

        <div className="absolute bottom-2/4 left-1/4 w-[32px] h[32px] md:w-[40px] md:h[40px] lg:w-[55px] lg:h[55px] 2xl:w-[160px] 2xl:h[112px]">
        <Image src={maqam}  />
        </div>

        <div className="absolute bottom-1/4 right-0 w-[32px] h[32px] md:w-[40px] md:h[40px] lg:w-[55px] lg:h[55px] 2xl:w-[82px] 2xl:h[82px]">
        <Image src={atom}  />
        </div>
      
       {/* <div className="absolute bottom-1/6 right-0">
        <Image src={globe} height={42} width={42} />
        </div>
        <div className="lg:block absolute bottom-4 right-[4rem]">
        <Image src={atom} height={42} width={42} />
        </div>
        
        <div className="lg:block absolute bottom-4 right-[4rem]">
        <Image src={maqam} height={42} width={42} />
</div> */}
        
        <SectionTitle title={"About Us"}> </SectionTitle>
    
            <div className="  sm:mt-[49px] md:mt-[83px] lg:mt-[83px] flex flex-col space-x-12  items-center justify-center md:flex-col md:mr-20 md:ml-20 lg:flex-col lg:mr-20 lg:ml-20" >

               <ParagSection paragraph={"WTM Algiers also known as the Women Techmakers Algiers program, was created to increase visibility, community, and resources for women in technology and also spread learning and build role models globally. It's located at the National Higher School of Computer science and dedicated to anyone who passionate and motivated about the tech field."} img={WTM} reverse={false}></ParagSection> 
                
                <div className=" lg:mt-[200px]">
                <YellowButton title={"Visit our website"}/>
                </div>
               
            </div>
            
            <div className="  sm:mt-[49px] md:mt-[83px] lg:mt-[100px] flex flex-col space-x-12  items-center justify-center md:flex-col md:mr-20 md:ml-20 lg:flex-col lg:mr-20 lg:ml-20">

               <ParagSection paragraph={"GDG Algiers is a local group of developers and students who are interested in Google’s developer technology products. It is located at the national school of computer sciences and hosts a variety of events activities for developers through different events that aim to help the developers community get the latest technology updates."} img={GDG} reverse={true}></ParagSection> 
                
                <div  className=" lg:mt-[200px]">
                <YellowButton title={"Visit our website"}/>
                </div>
               
            </div>
          
    
       
            </div>
        <div className=" z-0 h-[200px] max-w-[100%] bg-gradient-to-b from-qiskit-blue-normal to-qiskit-white"></div>
       
    </div>
}


export default AboutUs;