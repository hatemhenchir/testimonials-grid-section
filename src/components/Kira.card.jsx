import Image from "next/image";
const KiraCard = () => {
  return (
    <section className="bg-white w-[90%] mx-auto  p-[28px] mt-[1.25rem] mb-8 rounded-xl sm:col-start-2 sm:row-start-1 sm:row-span-2 sm:mb-0 lg:col-start-4 lg:row-start-1 lg:row-span-2 lg:w-[228px] shadow-[1px_11px_15px_2px_hsla(300,4%,65%,0.89)] my-animation animate__animated animate__fadeInRight ">
      <div className="flex gap-x-4 mb-[1.25rem]">
        <div className="w-[33px] h-[33px] overflow-hidden rounded-full">
          <Image src="/images/image-patrick.jpg" width={33} height={33} alt="Kira image" />
        </div>
        <div>
          <h2 className="text-grayish_blue font-semibold ">Kira Whittle</h2>
          <span className="text-grayish_blue opacity-[50%] font-medium">
            Verifed Graduate
          </span>
        </div>
      </div>
      <p className="text-grayish_blue font-semibold text-[18px]  lg:text-[14px]">
        Such a life-changing experience. Highly recommended!
        <span className="text-grayish_blue opacity-[70%] font-medium inline-block mt-4 text-[12px] lg:text-[11px] lg:mt-1">
          “ Before joining the bootcamp, I've never written a line of code. I
          needed some structure from professionals who can help me learn
          programming step by step. I was encouraged to enroll by a former
          student of theirs who can only say wonderful things about the program.
          The entire curriculum and staff did not disappoint. They were very
          hands-on and I never had to wait long for assistance. The agile team
          project, in particular, was outstanding. It took my learning to the
          next level in a way that no tutorial could ever have. In fact, I've
          often referred to it during interviews as an example of my developent
          experience. It certainly helped me land a job as a full-stack
          developer after receiving multiple offers. 100% recommend! ”
        </span>
      </p>
    </section>
  );
};

export default KiraCard;
