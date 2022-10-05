const YellowButton = ({ title }) => {
    return (
      <div className="z-20">
        <div className="bg-[url('/agenda/yellow_button.svg')] bg-no-repeat bg-center bg-contain z-10 mt-10">
          <div className="h-1/8 flex justify-center">
            <div className="h-[80px] text-center sm:text-[15px] md:text-[15px] lg:text-[15px]  text-3xl pt-5 " >{title}</div>
          </div>
        </div>
      </div>
    );
  };
  
  export default YellowButton;