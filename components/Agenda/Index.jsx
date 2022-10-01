import SectionTitle from "../shared/SectionTitle";
import { agenda } from "./agenda";
import Image from "next/image";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import maqam from "../../images/shapes/GDGAlgiers.png";
import computer from "../../images/shapes/computer.png";
import YellowButton from "../shared/yellowButton";

const Agenda = () => {
  return (
    <section>
      <SectionTitle title={"Agenda"}> </SectionTitle>
      <div className="md:hidden visible ml-[210px] sm:ml-[500px] md:mr-5 mt-[-50px]">
            <Image
              src={maqam}
              alt="maqam chahid"
              width={80}
              height={80}
              layout="fixed"
            />
          </div>
      <div className="md:grid grid-cols-6 flex flex-col justify-center">
        <div className=" md:flex flex-col hidden md:visible">
          <div className="md:visible invisible lg:ml-[60px] absolute pt-10 md:ml-0">
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
              width={90}
              height={90}
              layout="fixed"
            />
          </div>
        </div>

        <div className="col-span-4 flex flex-col justify-center ">
          <YellowButton title={"Saturday, October 22nd"} />
          <div className=" bg-qiskit-blue-lighter  bg-opacity-40 justify-center w-full md:pl-[50px] pl-[10px] mb-20 pr-[10px] md:pr-[30px] lg:py-[100px] md:py[80px] py-8 border-4 md:border-8 md:mt-[-30px] mt-[-10px]">
            <div className="">
              <div className=" md:text-xl font-medium md:font-semibold text-xsm py-0 md:px[10px] ">
                <div className="flew flex-row">
                  {agenda.map((agendaInfo, key) => {
                    return (
                      <div className="flex flex-row justify-stretch mx-auto ">
                        <div key={key} className="flex flex-none py-3 md:pl-10">
                          <div className="">{agendaInfo.Time}</div>
                        </div>
                        <div key={key} className="flex pl-2 md:pl-10 py-3 ">
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
          <div className="md:visible invisible absolute lg:ml-[30px] md:ml-5 mt-[-50px]">
            <Image
              src={maqam}
              alt="maqam chahid"
              width={100}
              height={100}
              layout="fixed"
            />
          </div>
          <div className="md:visible invisible  absolute lg:ml-[120px] md:ml-[40px] mt-[300px]">
            <Image
              src={globe}
              alt="globe"
              width={80}
              height={80}
              layout="fixed"
            />
          </div>
          <div className="md:visible invisible absolute md:ml-[10px] mt-[400px]">
            <Image
              src={computer}
              alt="computer"
              width={80}
              height={80}
              layout="fixed"
            />
          </div>
        </div>
        <div className="visible md:hidden absolute ml-[150px] mt-[800px] sm:mt-[500px]">
            <Image
              src={globe}
              alt="globe"
              width={70}
              height={70}
              layout="fixed"
            />
          </div>
      </div>
     
    </section>
  );
};

export default Agenda;
