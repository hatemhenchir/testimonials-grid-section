import Image from "next/image";
const JeantteCard = () => {
  return (
    <section className="bg-white w-[90%] mx-auto  p-[28px] mt-[1.25rem] rounded-xl lg:col-start-1 lg:row-start-2  lg:mr-0  lg:w-[228px] lg:ml-0 shadow-[1px_11px_15px_2px_hsla(300,4%,65%,0.89)] my-animation animate__animated animate__fadeInBottomLeft ">
      <div className="flex gap-x-4 mb-[1.25rem]">
        <div className="w-[33px] h-[33px] overflow-hidden rounded-full">
          <Image src="/images/image-patrick.jpg" width={33} height={33} alt="Jeanette image"/>
        </div>
        <div>
          <h2 className="text-grayish_blue font-semibold ">Jeanette Harmon</h2>
          <span className="text-grayish_blue opacity-[50%] font-medium">
            Verifed Graduate
          </span>
        </div>
      </div>
      <p className="text-grayish_blue font-semibold text-[18px] lg:text-[14px] ">
        An overall wonderful and rewarding experience
        <span className="text-grayish_blue opacity-[70%] font-medium inline-block mt-4 text-[12px] lg:mt-1">
          “ Thank you for the wonderful experience! I now have a job I really
          enjoy, and make a good living while doing something I love. ”
        </span>
      </p>
    </section>
  );
};

export default JeantteCard;
