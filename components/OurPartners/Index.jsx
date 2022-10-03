
import Image from "next/image";
import IBM from   "../../images/logos/IBM.png";
import Qiskit from "../../images/logos/Qiskit.png";
import  CQTech from "../../images/logos/CQTech.png";
import atom from  "../../images/shapes/atom.png"; 
import  globe from  "../../images/shapes/globe.png"; 
import computer from  "../../images/shapes/computer.png"; 
import GDGAlgiers from  "../../images/shapes/GDGAlgiers.png"; 

const OurPartners = () => {

  const partners = [
   
    { text: "Qiskit is an open-source software development kit (SDK) for working with quantum computers at the level of circuits, pulses, and algorithms. It provides tools for creating and manipulating quantum programs and running them on prototype quantum devices on IBM Quantum Experience or on simulators on a local computer", src:Qiskit , color:"partner-blue" },
    { text: "International Business Machines Corporation (IBM) is an American multinational technology corporation headquartered in Armonk, New York, with operations in over 171 countries.  IBM produces and sells computer hardware, middleware, and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology ", src:IBM ,color:"partner-yellow" },
    { text: "Constantine Quantum Technologies a professional creative community of Quantum Researchers and PHd students, who works on several Quantum Topics and shares many research papers", src:CQTech ,color:"partner-green",space:true  },
  ];
  return (
    <div className="flex flex-row"> 
      <div className=" w-1/12  ml-6">
        <div className=" hidden lg:flex">
        <div className=" mt-5 "><Image src={globe} alt="globe"   height={50} width={50}/></div>
        <div className="  mt-72"> <Image src={atom} alt="atom"  height={50} width={50}  /></div></div></div>
     <div className="flex flex-col  w-10/12">
       <div  className="flex   flex-wrap  ">
           {partners.map((partner, index) => (
           <div className={` flex-col ${partner.space ? " lg:mx-80 md:mx-auto   " : " mx-auto  "}   mx-auto my-10  `}>
              <div className={` bg-${partner.color} w-72  rounded-lg md:w-96`}>
               <p className=" text-center    " >{partner.text}</p></div>
               <Image src={partner.src}  />
            </div>
           
            ))}
         </div>
        <div className=" hidden lg:flex  md:ml-32  md:-mt-40  opacity-50"><Image src={computer}   height={50} width={50} /></div>
     </div>
     <div className="w-1/12    " >
     <div className=" hidden lg:flex lg:flex-col">
        <div className="  justify-end  -mt-12 "><Image src={GDGAlgiers}   alt="GDGAlgiers"/> </div>
        <div className=" mt-96 "><Image src={globe} alt="globe"  height={50} width={50}/></div>
        </div>
     </div>
    </div>
  )
};

export default OurPartners;
