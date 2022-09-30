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
          <YellowButton title={"Saturday 27th Sep"} />
          <div className="justify-center bg-qiskit-blue-lighter w-full md:pl-[50px] pl-[20px] mb-20 pr-[30px] lg:py-[100px] md:py[80px] py-12 border-4 md:border-8 mt-[-30px]">
            <div className="">
              <div className="md:text-xl font-medium md:font-semibold sm:text-l py-0 md:px[10px] ">
                <div className="flew flex-row">
                  {agenda.map((agendaInfo, key) => {
                    return (
                      <div className="flex flex-row justify-stretch mx-auto">
                        <div key={key} className="flex flex-none py-3 lg:pl-10">
                          <div className="">{agendaInfo.Time}</div>
                        </div>
                        <div key={key} className="flex pl-10 py-3 ">
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
          <div className="md:visible invisible  absolute lg:ml-[120px] md:ml-[40px] mt-[200px]">
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
      </div>
    </section>
  );
};

export default Agenda;
