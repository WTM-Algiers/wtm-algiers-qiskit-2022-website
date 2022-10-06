import SectionTitle from "../shared/SectionTitle";
import { agenda } from "./agenda";
import Image from "next/image";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import maqam from "../../images/shapes/GDGAlgiers.png";
import computer from "../../images/shapes/computer.png";
import YellowButton from "../shared/YellowButton";

const Agenda = () => {
  return (
    <section id="agenda" className="relative section-container">
      <SectionTitle title={"Agenda"}> </SectionTitle>
      <div className="md:hidden visible absolute left-0 top-0 z-25 sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]">
        <Image src={atom} alt="maqam chahid" layout="fill" />
      </div>
      <div className="md:hidden visible absolute right-0 top-0 z-25 sm:w-[80px] sm:h-[80px] w-[50px] h-[50px]">
        <Image src={maqam} alt="maqam chahid" layout="fill" />
      </div>
      <div className="md:grid grid-cols-6 flex flex-col justify-center relative">
        <div className=" md:flex flex-col hidden md:visible">
          <div className=" absolute top-20 left-10 w-[82px] h-[82px]">
            <Image src={globe} alt="globe" layout="fill" />
          </div>
          <div className=" absolute top-80 left-[-20px] w-[100px] h-[100px]">
            <Image src={atom} alt="atom" layout="fixed" />
          </div>
        </div>

        <div className="col-span-4 flex flex-col justify-center mt-[20px]">
          <YellowButton title={"Saturday, October 22nd"} />
          <div className=" bg-qiskit-blue-lighter  bg-opacity-40 justify-center w-full md:pl-[50px] pl-[10px] mb-20 pr-[10px] md:pr-[30px] lg:py-[80px] md:py[70px] py-8 border-4 md:border-8 md:mt-[-30px] mt-[-10px]">
            <div className="">
              <div className=" sm:text-xl font-medium md:font-semibold text-xs md:px[10px] ">
                <div className="flew flex-row">
                  {agenda.map((agendaInfo, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex flex-row justify-stretch mx-auto "
                      >
                        <div className="flex flex-none py-2.5 md:pl-10">
                          <div className="">{agendaInfo.Time}</div>
                        </div>
                        <div className="flex pl-2 md:pl-10 py-2.5 ">
                          <div className="">{agendaInfo.event}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:flex flex-col hidden md:visible">
          <div className=" absolute w-[80px] h-[80px] lg:h-[100px] lg:w-[100px] -top-2 right-0 lg:right-10">
            <Image src={maqam} alt="maqam chahid" layout="fill" />
          </div>
          <div className=" absolute w-[60px] h-[60px] lg:w-[80px] lg:h-[80px] top-60 right-0 lg:right-[-20px]">
            <Image src={globe} alt="globe" layout="fill" />
          </div>
          <div className=" absolute w-[70px] h-[70px] top-[350px] right-[50px] lg:right-[80px] xl:right-[120px]">
            <Image src={computer} alt="computer" layout="fill" />
          </div>
        </div>
        <div className="visible md:hidden absolute w-[60px] h-[60px] -bottom-20 right-0">
          <Image src={globe} alt="globe" layout="fill" />
        </div>
        <div className="visible md:hidden absolute w-[60px] h-[60px] bottom-0 left-0">
          <Image src={atom} alt="atom" layout="fill" />
        </div>
      </div>
    </section>
  );
};

export default Agenda;
