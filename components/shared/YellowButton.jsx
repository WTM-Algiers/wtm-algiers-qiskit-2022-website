const YellowButton = ({ title }) => {
  return (
    <div className="z-20 mb-[-20px]">
      <div className="bg-[url('/agenda/yellow_button.svg')] bg-no-repeat bg-center bg-contain z-10 mt-15">
        <div className="h-1/6 flex justify-center">
          <div className="h-[100px] text-3xl pt-[30px] font-semibold">{title}</div>
        </div>
      </div>
    </div>
  );
};

export default YellowButton;
