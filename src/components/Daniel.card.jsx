import Image from "next/image";
const DanielCard = () => {
  return (
    <section className="bg-violet w-[90%]  mx-auto bg-[url('/images/bg-pattern-quotation.svg')] bg-no-repeat  bg-[right_1rem_top] p-[28px] mt-[1.25rem] rounded-xl sm:col-start-2 sm:row-start-3 sm:row-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-1 lg:w-[472px] shadow-[1px_11px_15px_2px_hsla(300,4%,65%,0.89)] my-animation animate__animated animate__fadeInTopLeft">
      <div className="flex gap-x-4 mb-[1.25rem]">
        <div className="w-[33px] h-[33px] overflow-hidden rounded-full">
          <Image src='/images/image-daniel.jpg' width={33} height={33} alt="Daniel  image" />
        </div>
        <div>
          <h2 className="text-white font-semibold ">Daniel Clifford</h2>
          <span className="text-white opacity-[50%] font-medium ">Verifed Graduate</span>
        </div>
      </div>
      <p className="text-white font-semibold text-[18px] lg:text-[14px]  ">
        I received a job offer mid-course, and the subjects I learned were
        current, if not more so, in the company I joined. I honestly feel I got
        every penny's worth.
        <span className="text-white opacity-[70%] inline-block font-medium mt-4 text-[12px]  lg:mt-1">
          “ I was an EMT for many years before I joined the bootcamp. I've been
          looking to make a transition and have heard some people who had an
          amazing experience here. I signed up for the free intro course and
          found it incredibly fun! I enrolled shortly thereafter. The next 12
          weeks was the best - and most grueling - time of my life. Since
          completing the course, I've successfully switched careers, working as
          a Software Engineer at a VR startup. ”
        </span>
      </p>
    </section>
  );
};

export default DanielCard;
