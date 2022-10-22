const Bluebutton = ({ title }) => {
  return (
    <button
      disabled={true}
      className="z-20 mb-[-20px] cursor-not-allowed"
    >
      <div className="bg-[url('/hero/blue_button.svg')] bg-no-repeat bg-center bg-cover z-10">
        <div className="h-1/6 mx-[25px] pb-2 flex justify-center">
          <div className="sm:h-[100px] h-[70px] sm:text-3xl sm:font-medium text-l pt-[20px] sm:pt-[30px]">
            {title}
          </div>
        </div>
      </div>
    </button>
  );
};

export default Bluebutton;
