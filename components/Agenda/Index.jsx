import SectionTitle from "../shared/SectionTitle";
import { agenda } from "./agenda";
const Agenda = () => {
  return (
    <section>
      <SectionTitle title={"Agenda"}> </SectionTitle>
      <div className="flex flex-col justify-center relative">
        <div className="bg-[url('/agenda/1.svg')] bg-no-repeat bg-center bg-contain mb-[-30px] z-10 mt-10">
            <div className="h-1/11 flex justify-center">
                <div className="h-[60px] text-3xl pt-3"> date</div>
            </div>
        </div>
        <div className="relative">
          <div className="md:mx-auto md:w-1/2 py-[100px] sm:py-[50px]  flex justify-center bg-qiskit-blue-lighter border-4 ">
            <div className="">
              {agenda.map((agendaInfo, key) => {
                return (
                  <div key={key} className="flex flex-row text-xl py-2">
                    <div className="px-3 lg:pr-5">{agendaInfo.Time}</div>
                    <div>{agendaInfo.event}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
