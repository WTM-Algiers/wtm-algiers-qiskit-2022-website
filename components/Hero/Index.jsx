import Image from "next/image";
import Navbar from "./Navbar";
import Qiskit from "../../images/logos/QiskitHero.png";
import Arrow from "../../images/shapes/Arrow.png";
import GDGAlgiers from "../../images/logos/GDGAlgiers-white.png";
import CounterContainer from "./CounterContainer";
import Maqam from "../../images/shapes/MaqamWhite.png";
import Atom from "../../images/shapes/atomWhite.png";
import Globe from "../../images/shapes/globe.png";
import Computer from "../../images/shapes/computerWhite.png";
import Purpulebutton from '../shared/Purpulebutton'
const Hero = () => {
  return (
    <div className="min-h-screen hero-bg">
      <div className="section-container">
        <Navbar />
        <div className="flex flex-col gap-16 lg:gap-0 relative">
          <div className="w-12 h-12 absolute top-1/4 left-4 lg:top-4 lg:left-4">
            <Image src={Atom} />
          </div>
          <div className="w-12 h-12 absolute top-12 left-[90%] lg:top-4 lg:left-1/4">
            <Image src={Globe} />
          </div>
          <div className="hidden lg:block w-16 h-16 absolute top-4 right-16">
            <Image src={Maqam} />
          </div>
          <div className="flex flex-col lg:flex-row items-center ">
            <div className="flex flex-col gap-7 flex-1 lg:pl-12 text-qiskit-white">
              <h1 className="font-bold text-4xl lg:text-6xl 2xl:text-7xl leading-[4.5rem]">
                Qiskit | Fall Fest Algiers
              </h1>
              <p className="font-medium leading-[2rem] lg:text-2xl 2xl:text-4xl 2xl:leading-[2.875rem]">
                Your chance to discover the Quantum Computing world!
              </p>
              <div className="flex items-end">
                <div className="h-[67px] w-[67px]">
                  <Image src={Arrow} />
                </div>
                <div className="mb-[-50px] 2xl:mb-[-110px]">
                  <Purpulebutton title={"Register Now!"}/>
                </div>
              </div>
            </div>

            <div className="flex-1 pt-20 lg:pt-0 order-first lg:order-last">
              <Image src={Qiskit} />
            </div>
          </div>

          <div className="flex items-center">
            <div className="hidden lg:flex">
              <Image src={GDGAlgiers} />
            </div>
            <CounterContainer countDownLimit={1665158400000} />
          </div>

          <div className="w-12 h-12 absolute bottom-16 left-8">
            <Image src={Atom} />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-8">
            <Image src={Globe} />
          </div>
          <div className="hidden lg:block w-12 h-12 absolute bottom-1/4 right-2/4">
            <Image src={Computer} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
