import Image from "next/image";
import Atom from "../../images/sectionsAssets/Atom.png";

const CounterAtom = ({time, timeleft}) => {
  return (
    <div className="relative -mt-12">
      <Image src={Atom} height={100} width={100} />
      <div className="absolute top-1/4 right-1/3 text-xl">
        <p className="font-bold text-center text-2xl">{timeleft}</p>
        <p className="text-center text-sm">{time}</p>
      </div>
    </div>
  );
};

export default CounterAtom;
