import SectionTitle from "../shared/SectionTitle";
import Image from "next/image";
import globe from "../../images/shapes/globe.png";
import atom from "../../images/shapes/atom.png";
import maqam from "../../images/shapes/GDGAlgiers.png";
import computer from "../../images/shapes/computer.png";
import qBraid from "../../images/logos/qBraid.png";
import World from "../../images/logos/World.png";
import WIQ from "../../images/logos/WIQ.png";
import Sonatrach from "../../images/logos/Sonatrach.png";

const TheyTrustedUs = () => {
   
    return (

        <section className="h-full w-full relative">
           
            <SectionTitle title={" They trusted us"}></SectionTitle>
                
                <div className="md:visible absolute">    
                    <Image
                    imageSrc={globe}
                    imageAlt="globe image"
                    width={80}
                    height={80}
                    layout="fixed"
                />
                </div>

                <div className="">
                    <Image
                    imageSrc={atom}
                    imageAlt="atom image"
                    width={80}
                    height={80}
                    layout="fixed"
                />
                </div>

                <div className="md:visible invisible lg:">
                    <Image
                    imageSrc={computer}
                    imageAlt="computer image"
                    width={80}
                    height={80}
                    layout="fixed"
                    
                />
                </div>

                <div className="lg:  md:  sm:">
                <div className="flex flex-col lg:flex-row">
                    <Image 
                    imageSrc={qBraid}
                    imageAlt="qbraid logo"
                    width={358}
                    height={120} 
                />
                    <Image
                    imageSrc={WIQ}
                    imageAlt="WIQ logo"
                    margin="lg: md:"
                />
                </div>
                <div className="flex flex-col lg:flex-row">
                    <Image
                    imageSrc={Sonatrach}
                    imageAlt="Sonatrach logo"
                    margin="lg: md:"
                />
                    <Image
                    imageSrc={World}
                    imageAlt="World logo"
                    margin="lg: md:"
                />
                </div>
                </div>
                <div className="flex flex-col invisible md:visible">
                
                <div className="md:visible invisible lg:">
                    <Image
                    imageSrc={atom}
                    imageAlt="atom image"
                    width={80}
                    height={80}
                    layout="fixed"
                />
                
                <div className="">
                    <Image
                    imageSrc={maqam}
                    imageAlt="maqam image"
                    width={80}
                    height={80}
                    layout="fixed"
                />
                </div>
                <div className="">
                    <Image
                    imageSrc={globe}
                    imageAlt="globe image"
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

export default TheyTrustedUs;