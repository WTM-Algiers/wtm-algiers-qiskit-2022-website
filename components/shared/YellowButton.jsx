const YellowButton = ({ title }) => {
  return (
    <div className="z-20 mb-[-20px]">
      <div className="bg-[url('/agenda/yellow_button.svg')] bg-no-repeat bg-center bg-contain z-10 mt-15">
        <div className="h-1/6 flex justify-center">
          <div className="md:h-[100px] h-[70px] md:text-3xl  text-2xl pt-[20px] md:pt-[30px]">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default YellowButton;
