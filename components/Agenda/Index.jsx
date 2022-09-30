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
      <div className=" flex flex-col justify-center">

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

        <div className="flex flex-col justify-center align-center">
          <YellowButton title={"Saturday 27th Sep"} />
          <div className="bg-qiskit-blue-lighter shadow-lg sm:mx-auto md:w-7/12  py-[60px] md:py[50px] sm:py-[40px]  flex justify-center  border-4 mb-20  mt-[-30px]">
            <div className="mx-auto">
              <div className="flex flex-row md:text-xl sm:text-l py-0 md:px[10px]">
                <div>
                  {agenda.map((agendaInfo, key) => {
                    return (
                      <div key={key} className="flex flex-col py-4">
                        <div className="px-5">{agendaInfo.Time}</div>
                      </div>
                    );
                  })}
                </div>

                <div>
                  {agenda.map((agendaInfo, key) => {
                    return (
                      <div key={key} className="flex flex-col py-4">
                        <div className="px-5 ">{agendaInfo.event}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Agenda;
