import Image from "next/image";
const ParagSection = ({ paragraph , img ,reverse }) => {
    return (
     
       <div className={` flex flex-col md:flex-col items-center justify-center ${reverse ? "2xl:flex-row-reverse lg:flex-row-reverse" : "2xl:flex-row lg:flex-row"}`}>
        <div className="flex-1  mb-[35px]">
       <p className=" tex-justify p-[10px] sm:leading-6 sm:text-[13px]  md:text-[16px] md:leading-8  lg:text-[21px] lg:leading-8 2xl:text-[32px] 2xl:leading-10 ">
        {paragraph}
       </p>
      </div>
       
       <div className={`flex-1 object-none w-[131px] md:w-[250] lg:w-[300px] 2xl:w-[480px] h-[131px]  md:w-[250] lg:h-[300px]  2xl:h-[480px]`} >     
       <Image src={img} alt=""/>
       </div>  
   </div>
    );
  };

  export default ParagSection;