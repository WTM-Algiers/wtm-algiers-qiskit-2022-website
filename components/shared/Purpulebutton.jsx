const Button = ({ title }) => {
    return (
      <button className="z-2 disabled cursor-not-allowed">
        <div className="bg-[url('/hero/purpule_button.svg')] bg-no-repeat bg-center bg-contain z-10 mt-10">
          <div className=" place-content-center flex justify-center">
            <div className="h-[80px] md:h-[110px] 2xl:h-[200px] mx-[80px] md:mx-[40px] 2xl:mx-[60px] sm:font-medium text-qiskit-white text-[18px]  2xl:text-[30px] pt-[30px] md:pt-[40px] 2xl:pt-[80px] sm:pt-[80px]">{title}</div>
          </div>
        </div>
      </button>
    );
  };
  
  export default Button;