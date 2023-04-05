import Image from "next/image";

const PatrickCard = () => {
  return (
    <section className="bg-blackish_blue w-[90%] mx-auto  p-[28px] mt-[1.25rem] rounded-xl sm:col-start-1 sm:row-start-1 sm:row-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:w-[472px] shadow-[1px_11px_15px_2px_hsla(300,4%,65%,0.89)] my-animation  animate__animated animate__fadeInUp">
      <div className="flex gap-x-4 mb-[1.25rem]">
        <div className="w-[33px] h-[33px] overflow-hidden rounded-full">
          <Image src="/images/image-patrick.jpg" width={33} height={33} alt="Patrick image"  />
        </div>
        <div>
          <h2 className="text-white font-semibold ">Patrick Abrams</h2>
          <span className="text-white opacity-[50%] font-medium">
            Verifed Graduate
          </span>
        </div>
      </div>
      <p className="text-white font-semibold text-[18px] lg:text-[14px] ">
        Awesome teaching support from TAs who did the bootcamp themselves.
        Getting guidance from them and learning from their experiences was easy.
        <span className="text-white opacity-[70%] font-medium inline-block mt-4 text-[12px] lg:mt-1">
          “ The staff seem genuinely concerned about my progress which I find
          really refreshing. The program gave me the confidence necessary to be
          able to go out in the world and present myself as a capable junior
          developer. The standard is above the rest. You will get the personal
          attention you need from an incredible community of smart and amazing
          people. ”
        </span>
      </p>
    </section>
  );
};

export default PatrickCard;
