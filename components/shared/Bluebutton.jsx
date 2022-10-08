const Bluebutton = ({ title }) => {
    return (
      <button className="z-20 mb-[-20px] disabled cursor-not-allowed">
        <div className="bg-[url('/hero/blue_button.svg')] bg-no-repeat bg-center bg-cover z-10">
          <div className="h-1/6 mx-[35px] pb-3 flex justify-center">
            <div className="sm:h-[100px] h-[70px] sm:text-2xl sm:font-medium text-l pt-[20px] sm:pt-[30px]">{title}</div>
          </div>
        </div>
      </button>
    );
  };
  
export default Bluebutton;
  
 