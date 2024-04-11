import { FaBook } from "react-icons/fa";
import { ImManWoman } from "react-icons/im";
import { IoMdHome } from "react-icons/io";
import { MdDateRange } from "react-icons/md";

const navbar = () => {


  function scrollF(a) {
    const konten = document.getElementById(a);
    konten.scrollIntoView();
  }

  return (
    <header className="relative z-[999]">

      <div className="
        fixed bottom-3 md:top-1 md:bottom-auto md:w-[32rem] w-[85%] left-1/2 -translate-x-1/2
        bg-opacity-50 backdrop-blur-sm shadow-md
        flex justify-between text-center overflow-auto text-sky-900 bg-white border border-amber-500 rounded-full font-medium">


        <button
          onClick={() => scrollF('home')}
          className="w-full py-2 text-2xl md:text-base md:py-1 font-bold cursor-pointer hover:bg-sky-100 hover:text-sky-600 transition-all duration-300 flex flex-row justify-center items-center gap-2">
          <IoMdHome />
          <p className="hidden md:block">Home</p>
        </button>
        <button
          onClick={() => scrollF('couple')}
          className="w-full py-2 text-2xl md:text-base md:py-1 font-bold cursor-pointer hover:bg-sky-100 hover:text-sky-600 transition-all duration-300 flex flex-row justify-center items-center gap-2">
          <ImManWoman />
          <p className="hidden md:block">Couple</p>
        </button>
        <button
          onClick={() => scrollF('date')}
          className="w-full py-2 text-2xl md:text-base md:py-1 font-bold cursor-pointer hover:bg-sky-100 hover:text-sky-600 transition-all duration-300 flex flex-row justify-center items-center gap-2">
          <MdDateRange />
          <p className="hidden md:block">Date</p>
        </button>
        <button
          onClick={() => scrollF('wish')}
          className="w-full py-2 text-2xl md:text-base md:py-1 font-bold cursor-pointer hover:bg-sky-100 hover:text-sky-600 transition-all duration-300 flex flex-row justify-center items-center gap-2">
          <FaBook />
          <p className="hidden md:block">Wish</p>
        </button>
      </div>
    </header>
  )
}

export default navbar