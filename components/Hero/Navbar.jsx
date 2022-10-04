import Image from "next/image";
import WTMAlgiers from "../../images/logos/WTMAlgiers-white.png";
import NavLinks from "./links";
const Navbar = () => {
  return (
    <header className="pt-8">
      <div className="flex justify-between items-center">
        <div>
          <Image src={WTMAlgiers} alt="WTM Algiers" />
        </div>

        <ul className="flex items-center text-xl gap-16 font-medium text-qiskit-white 2xl:text-4xl 2xl:gap-24">
          {NavLinks.map((navLink, idx) => {
            return (
              <li key={idx} className="cursor-pointer relative">
                {navLink.content == "Home" && (
                  <div className="absolute left-0 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                )}
                <p>{navLink.content}</p>
              </li>
            );
          })}
        </ul>

        <div>
          <button>Join us</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
