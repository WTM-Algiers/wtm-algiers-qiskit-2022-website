import Image from "next/image";
import downArrow from "../../images/shapes/Arrow.png";
import upArrow from "../../images/shapes/upArrow.png";
const SectionTitle = ({ isWhite = false, title }) => {
  return (
    <div
      className={`flex ${
        title === "About us" ? "items-start" : "items-end"
      } gap-4 2xl:gap-6 md:justify-start`}
    >
      <div className="flex md:h-20 md:w-16 2xl:w-28 2xl:h-32">
        {title === "About us" ? (
          <div className="relative w-[68px] h-[75px] 2xl:w-[113px] 2xl:h-[127px]">
            <Image src={upArrow} alt="" layout="fill" />
          </div>
        ) : (
          <div className="relative w-[68px] h-[75px] 2xl:w-[113px] 2xl:h-[127px]">
            <Image src={downArrow} alt="" />
          </div>
        )}
      </div>
      <h2
        className={`text-2xl sm:text-3xl lg:text-5xl 2xl:text-[5rem] ${
          isWhite ? "text-qiskit-white" : "text-qiskit-blue-normal"
        } font-bold`}
      >
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
