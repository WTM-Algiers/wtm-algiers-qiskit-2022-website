import Image from "next/image";
import Background from "../../images/sectionsAssets/Hero-background.png";
import WTM from "../../images/logos/WTMAlgiers.png";
import GDG from "../../images/logos/GDGAlgiers.png"
import ConParag from "../shared/ConParag";
import YellowButton from "../shared/YellowButton";
const AboutUs = () => {

    return <div >
        <div className=" flex flex-col space-x-12 items-center justify-center lg:flex-row lg:mb-12  lg:mr-20 lg:ml-20" >
                <ConParag paragraph={"WTM Algiers, also known as the Women Techmakers Algiers program, was created to increase visibility, community, and resources for women in technology and also spread learning and build role models globally. It's located at the National Higher School of Computer science and dedicated to anyone who passionate and motivated about the tech field."} />       
                <Image src={WTM} alt="" className="w-[132px] h-[131px] lg:w-[321px] lg:h-[319px]" />
               
        </div>
       
        <div className=" flex flex-col  space-y-12 items-center justify-center lg:flex-row  lg:mr-20 lg:ml-20 lg:mb-12" >
                <ConParag paragraph={"GDG Algiers is a local group of developersand students who are interested in Google s developer technology products. It is located at the national school of computer sciences and hosts a variety of events activities for developers through different events that aim to help the developers community get the latest technology updates."} />          
                <Image src={GDG} alt="" className="w-[132px] h-[131px] lg:w-[321px] lg:h-[319px]"/>
               
        </div>
        <div>
        <YellowButton title={"Visit our website"}/>
        </div>
       
    </div>
}


export default AboutUs;