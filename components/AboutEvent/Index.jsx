import Image from "next/image";
import SectionTitle from "../shared/SectionTitle";
import Map from "../../images/sectionsAssets/Map.png";
import GDGAlgiers from "../../images/shapes/GDGAlgiers.png";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import computer from "../../images/shapes/computer.png";


const AboutEvent = () => {
    return (
    <section id="about-event" className="section-container pt-12 lg:pt-24"> 
      <div className="relative">
        <div className="absolute right-0 top-0 sm:right-[596px] sm:top-0 w-[28px] h-[30px]  lg:w-[47px] lg:h-[50px] 2xl:w-[70px] 2xl:h-[70px]">
          <Image 
          src={atom}
          alt="atom"
              />
        </div>
      </div>     
      <SectionTitle title={"About The Event"}/>
      
      <div className="relative">
        <div className="absolute top-[460px] right-0 sm:top-[-70px] sm:right-0 lg:top-[-32px] lg:right-0  w-[68px] h-[58px] lg:w-[106px] lg:h-[74px] 2xl:w-[70px] 2xl:h-[70px]">
              <Image
                src={GDGAlgiers}
                alt="GDG"
              />
          </div>
        </div>
        
        
      <div>
      <div className="relative">
        <div className="absolute top-[650px] sm:top-[450px] right-[122px]  h-[48px] w-[48px] lg:right-[10px] 2xl:right-[10px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
              <Image
                src={globe}
                alt="globe"
              />
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-[400px] left-[-30px] sm:top-[340px] sm:left-[-30px] h-[53px] w-[56px] lg:h-[66px] lg:w-[70px] 2xl:w-[105px] 2xl:h-[99px]">
              <Image
                src={atom}
                alt="atom"
              />
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-[-35px] left-[-25px] h-[38px] w-[38px] lg:w-[55px] lg:h-[55px] 2xl:w-[82px] 2xl:h-[82px]">
              <Image
                src={globe}
                alt="globe"
              />
        </div>
      </div>
        
        <div className= "gap-8 row-2 lg:columns-2 mt-[50px]">
          <div><Image src={Map} alt="" /></div>
          <div className="gap-8 rows-2 p-4 sm:p-10">
            <p className="text-xl 2xl:text-3xl lg:text-2xl"><b>The Qiskit Fall Fest</b> is a collection of quantum computing events on college campuses around the world, with support from the entire IBM Quantum team. This year <b>WTM Algiers</b> is one of the 34 communities which are hosting the Qiskit Fall Fest event.</p>
            <div className="gap-4 columns-2 2xl:text-4xl lg:text-3xl text-xl font-bold mt-[15px] pr-2">
              <div className="flex-row">
                <p className="2xl:text-7xl lg:text-6xl text-2xl">1ST</p>
                <p className="2xl:text-4xl lg:text-3xl sm:text-xl text-base">In Africa and</p>
                <p className="2xl:text-4xl lg:text-3xl sm:text-xl text-base">MENA Region</p>
              </div>
              <div className="flex items-start gap-2 ">
                <p className="2xl:text-7xl lg:text-6xl text-2xl">+8</p>
                <p className="2xl:text-4xl lg:text-3xl sm:text-xl text-base mt-[25px]">Talks Workshops Challenges</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="relative">
      <div className="absolute invisible sm:visible right-[640px] h-[46px] w-[61px] 2xl:h-[93px] 2xl:w-[93]">
      <Image
          src={computer}
          alt="computer"
              />
      </div> 
      </div>     
      
    </section>
    
    );
};

export default AboutEvent;