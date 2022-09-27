import Image from "next/image";
import downArrow from "../../images/shapes/Arrow.png";
import upArrow from "../../images/shapes/upArrow.png";
const SectionTitle = ({ title }) => {
  return (
    <div
      className={`flex ${
        title === "About us" ? "items-start" : "items-end"
      } gap-4 2xl:gap-6`}
    >
      <div className="hidden md:flex md:h-20 md:w-16 2xl:w-28 2xl:h-32">
        {title === "About us" ? (
          <Image src={upArrow} alt="" />
        ) : (
          <Image src={downArrow} alt="" />
        )}
      </div>
      <h2 className="text-5xl 2xl:text-[5rem] text-qiskit-blue-normal font-bold">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
