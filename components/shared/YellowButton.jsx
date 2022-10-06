import Link from "next/link";
const YellowButton = ({ redirect = "", title }) => {
  return (
    <div className="z-20">
      <div className="bg-[url('/agenda/yellow_button.svg')] bg-no-repeat bg-center bg-contain z-10 mt-10">
        <div className="h-1/8 flex justify-center">
          {redirect ? (
            <Link href={redirect}>
              <a target="__blank">
                <div className="h-[80px] text-center sm:text-[15px] md:text-[15px] lg:text-2xl text-xl pt-5 font-semibold">
                  {title}
                </div>
              </a>
            </Link>
          ) : (
            <div className="h-[80px] text-center sm:text-[15px] md:text-[15px] lg:text-2xl text-xl pt-5 font-semibold">
              {title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default YellowButton;

// import Link from "next/link";
// const YellowButton = ({ redirect = "", title }) => {
//   return (
//     <div className={`z-20 mb-[-20px] ${redirect && "cursor-pointer"}`}>
//       <div className="bg-[url('/agenda/yellow_button.svg')] bg-no-repeat bg-center bg-contain z-10 mt-15">
//         {redirect ? (
//           <Link href={redirect}>
//             <a target="__blank" className="h-1/6 flex justify-center">
//               <div className="sm:h-[100px] h-[60px] sm:text-3xl sm:font-medium text-l pt-[20px] sm:pt-[30px]">
//                 {title}
//               </div>
//             </a>
//           </Link>
//         ) : (
//           <div className="h-1/6 flex justify-center">
//             <div className="sm:h-[100px] h-[60px] sm:text-3xl sm:font-medium text-l pt-[20px] sm:pt-[30px]">
//               {title}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
// export default YellowButton;
