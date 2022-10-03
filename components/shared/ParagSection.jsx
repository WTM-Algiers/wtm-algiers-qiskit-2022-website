import Image from "next/image";
const ParagSection = ({ paragraph , img, reverse }) => {
    return (
     
       <div className={`flex flex-col items-center justify-center ${reverse ? "md:flex-row-reverse lg:flex-row-reverse" : "md:flex-row lg:flex-row"}`}>
        <div className="flex-1  mb-[35px]">
     <p className=" z- tex-justify leading-6 text-[13px] p-[10px] md:text-[21px] md:leading-8 lg:text-[32px] lg:leading-10 ">
        {paragraph}
     </p>
      </div>
       
       <div className="flex-1  object-none w-[132px] h-[131px]  md:w-[321px] md:h-[319px] lg:w-[482px] lg:h-[479px] ">     
       <Image src={img} alt="" />
       </div>  
   </div>
    );
  };

  export default ParagSection;