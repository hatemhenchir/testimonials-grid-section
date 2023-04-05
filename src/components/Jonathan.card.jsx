import Image from "next/image";

const JonathanCard = () => {
  return (
    <section className="bg-grayish_blue w-[90%] mx-auto  p-[28px] mt-[1.25rem] rounded-xl sm:col-start-1 sm:row-start-3 lg:col-start-3 lg:row-start-1 lg:w-[228px] shadow-[1px_11px_15px_2px_hsla(300,4%,65%,0.89)] my-animation animate__animated animate__fadeInDown ">
      <div className="flex gap-x-4 mb-[1.25rem]">
        <div className="w-[33px] h-[33px] overflow-hidden rounded-full">
          <Image src="/images/image-jonathan.jpg" width={33} height={33} alt="Jonathan image" />
        </div>
        <div>
          <h2 className="text-white font-semibold ">Jonathan Walters</h2>
          <span className="text-white opacity-[50%] font-medium">
            Verifed Graduate
          </span>
        </div>
      </div>
      <p className="text-white font-semibold text-[18px] lg:text-[14px]  ">
        The team was very supportive and kept me motivated
        <span className="text-white opacity-[70%] font-medium inline-block mt-4 text-[12px] lg:mt-1">
          “ I started as a total newbie with virtually no coding skills. I now
          work as a mobile engineer for a big company. This was one of the best
          investments I've made in myself. ”
        </span>
      </p>
    </section>
  );
};

export default JonathanCard;
