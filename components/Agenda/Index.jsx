import SectionTitle from "../shared/SectionTitle";
import { agenda } from "./agenda";
import Image from "next/image";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import maqam from "../../images/shapes/GDGAlgiers.png";
import computer from "../../images/shapes/computer.png";

const Agenda = () => {
  return (
    <section>
      <SectionTitle title={"Agenda"}> </SectionTitle>
      <div className="flex flex-col justify-center ">
        <div className="z-20">
          <div className="bg-[url('/agenda/yellow_button.svg')] bg-no-repeat bg-center bg-contain mb-[-30px] z-10 mt-10">
            <div className="h-1/8 flex justify-center">
              <div className="h-[80px] text-3xl pt-5"> Saturday 27th Sep</div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className=" flex flex-col invisible md:visible">
            <div className="md:visible invisible lg:ml-20 absolute pt-10 md:ml-0">
              <Image
                src={globe}
                alt="globe"
                width={80}
                height={80}
                layout="fixed"
              />
            </div>
            <div className="md:visible invisible ml-15 absolute pt-[300px]">
              <Image
                src={atom}
                alt="atom"
                width={80}
                height={80}
                layout="fixed"
              />
            </div>
          </div>

          <div className="bg-qiskit-blue-lighter shadow-lg md:mx-auto md:w-7/12  py-[100px] md:py[80px] sm:py-[50px]  flex justify-center  border-4 mb-20 ">
            <div className="">
              {agenda.map((agendaInfo, key) => {
                return (
                  <div
                    key={key}
                    className="flex flex-row text-xl py-4 md:px[50px]"
                  >
                    <div className="px-3 lg:pr-5">{agendaInfo.Time}</div>
                    <div>{agendaInfo.event}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className=" md:flex flex-col hidden md:visible">
            <div className="md:visible invisible lg:ml-[-150px] md:ml[-80px] mt-[-80px]">
              <Image
                src={maqam}
                alt="maqam chahid"
                width={100}
                height={100}
                layout="fixed"
              />
            </div>
            <div className="md:visible invisible mr-0  mt-[150px]">
              <Image
                src={globe}
                alt="globe"
                width={80}
                height={80}
                layout="fixed"
              />
            </div>
            <div className="md:visible invisible xl:ml-[-230px] lg:ml-[-120px] md:ml-[-80px] mt-[20px]">
              <Image
                src={computer}
                alt="computer"
                width={100}
                height={100}
                layout="fixed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
