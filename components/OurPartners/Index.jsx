import Link from "next/link";
import Image from "next/image";
import IBM from "../../images/logos/IBM.png";
import Qiskit from "../../images/logos/Qiskit.png";
import CQTech from "../../images/logos/CQTech.png";
import atom from "../../images/shapes/atom.png";
import globe from "../../images/shapes/globe.png";
import computer from "../../images/shapes/computer.png";
import GDGAlgiers from "../../images/shapes/GDGAlgiers.png";
import SectionTitle from "../shared/SectionTitle";

const OurPartners = () => {
  const partners = [
    {
      text: "Qiskit is an open-source software development kit (SDK) for working with quantum computers at the level of circuits, pulses, and algorithms. It provides tools for creating and manipulating quantum programs and running them on prototype quantum devices on IBM Quantum Experience or on simulators on a local computer",
      src: Qiskit,
      redirect: "https://qiskit.org/",
    },
    {
      text: "International Business Machines Corporation (IBM) is an American multinational technology corporation headquartered in Armonk, New York, with operations in over 171 countries.  IBM produces and sells computer hardware, middleware, and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology ",
      src: IBM,
      redirect: "https://www.ibm.com/",
    },
    {
      text: "Constantine Quantum Technologies (CQTech) is a collaborative research group working on Quantum Optics, Quantum Computing, and Quantum Simulation. CQTech members are mainly theoretical physicists from University of Constantine 1 (UC1) with a strong background on quantum mechanics, statistical mechanics, mathematical and computational physics.",
      src: CQTech,
      space: true,
      redirect: "https://cqtech.org/",
    },
  ];
  return (
    <section id="our-partners" className="section-container pt-12 lg:pt-24">
      <SectionTitle title={"Our Partners"} />
      <div className="flex flex-row">
        <div className=" w-1/12 ml-6">
          <div className=" hidden lg:flex">
            <div className="mt-5">
              <Image src={globe} alt="globe" height={50} width={50} />
            </div>
            <div className="mt-72">
              {" "}
              <Image src={atom} alt="atom" height={50} width={50} />
            </div>
          </div>
        </div>
        <div className="w-10/12">
          <div className="flex flex-wrap items-center justify-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className={`flex flex-col items-center ${
                  partner.space ? " lg:mx-80 md:mx-auto " : "mx-auto"
                } mx-auto my-10  `}
              >
                <div className={`w-72 rounded-lg md:w-96`}>
                  <p className=" text-center 2xl:text-lg">{partner.text}</p>
                </div>
                <Link href={partner.redirect}>
                  <a target="__blank">
                    <Image src={partner.src} />
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className=" hidden lg:flex  md:ml-32  md:-mt-40  opacity-50">
            <Image src={computer} height={50} width={50} />
          </div>
        </div>
        <div className="w-1/12">
          <div className="hidden lg:flex lg:flex-col">
            <div className="justify-end -mt-12 ">
              <Image src={GDGAlgiers} alt="GDGAlgiers" />{" "}
            </div>
            <div className="mt-96">
              <Image src={globe} alt="globe" height={50} width={50} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
