import { useState } from "react";
import Image from "next/image";
import WTMAlgiers from "../../images/logos/WTMAlgiers-white.png";
import NavLinks from "./links";
import CFA from "./CFA";
const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  return (
    <header className="pt-8 flex flex-col gap-8">
      {/* Desktop menu */}
      <div>
        <div className="flex justify-between items-center">
          <div>
            <Image src={WTMAlgiers} alt="WTM Algiers" />
          </div>

          <ul className="hidden lg:flex items-center text-xl gap-16 font-medium text-qiskit-white 2xl:text-4xl 2xl:gap-24">
            {NavLinks.map((navLink, idx) => {
              return (
                <li key={idx} className="cursor-pointer hover:text-qiskit-yellow transition-all duration-700 relative">
                  {navLink.content == "Home" && (
                    <div className="absolute left-0 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                  )}
                  <p>{navLink.content}</p>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex">
            <CFA />
          </div>

          <div onClick={() => setIsNavToggled(!isNavToggled)} className="flex flex-col cursor-pointer gap-2 lg:hidden">
            <div className="burger-line"></div>
            <div className="burger-line"></div>
            <div className="burger-line"></div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isNavToggled && (
        <div className="flex flex-col items-center lg:hidden">
          <ul className="flex flex-col items-center text-xl gap-16 font-medium text-qiskit-white 2xl:text-4xl 2xl:gap-24">
            {NavLinks.map((navLink, idx) => {
              return (
                <li key={idx} className="cursor-pointer relative">
                  {navLink.content == "Home" && (
                    <div className="absolute left-2 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                  )}
                  <p>{navLink.content}</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
