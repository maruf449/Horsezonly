import Image from "next/image";
import AuthButtons from "./AuthButtons";

const HeroSection = () => {
  return (
    <div className='flex h-screen w-full relative'>
      <div className='flex-1 flex overflow-hidden bg-[#00b0f0a6] relative justify-center items-center z-10 bg-noise'>
        <img
          src='/of-logo.svg'
          alt='OnlyHorse Logo'
          className='absolute -left-1/4 opacity-15 -bottom-52 lg:scale-150 xl:scale-105 scale-[2]
          pointer-events-none select-none'
        />
        <div className='flex flex-col gap-2 px-4 xl:ml-40 text-center md:text-start font-semibold mt-16'>
          <Image
            src={"/onlyhorse.png"}
            alt='OnlyHorse Logo'
            width={769}
            height={182}
            className='mt-20 w-[420px] z-0 pointer-events-none select-none'
          />

          <p className='text-2xl md:text-3xl text-balance'>
            Hey! It's <span className='bg-stone-800 px-2 font-bold text-white'>NOT</span> what it looks like.
          </p>
          <p className='text-2xl md:text-3xl mb-32 leading-snug text-balance'>
            Built for <span className='bg-sky-500 font-bold px-2 text-white'>HORSES</span> NOT{" "}
            <span className='bg-red-500 px-2 font-bold text-white'>OTHERS</span>
          </p>
          <AuthButtons />
        </div>
      </div>

      <div className='flex-1 relative overflow-hidden justify-center items-center hidden md:flex'>
        <Image
          src={"/horse-1.png"}
          alt='Horse'
          fill
          className='object-cover opacity-90 pointer-events-none select-none h-full'
        />
      </div>

      <a
        href=""
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white animate-bounce"
      >
        <svg
          className="w-10 h-10 p-1 mx-auto bg-gradient-to-r from-blue-500 via-purple-400 to-blue-300 rounded-full shadow-lg transition-all duration-300 ease-out transform hover:scale-110 hover:rotate-12 hover:shadow-2xl hover:from-purple-400 hover:to-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 15l7 7 7-7M12 3v12" />
        </svg>
        <p className="mt-2 text-lg font-semibold bg-gradient-to-r from-blue-500 via-purple-400 to-blue-300 bg-clip-text text-transparent animate-pulse transition-all duration-300 ease-out transform hover:scale-110">
          Scroll Down
        </p>
      </a>
    </div>
  );
};
export default HeroSection;
