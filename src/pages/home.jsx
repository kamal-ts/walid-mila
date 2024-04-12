
// import Border from "../assets/7187971_2504-ai.png";
import BorderTop from "../assets/7007385_2416-ai.png";
import BorderBot from "../assets/7007385_2416-b.png";
import BrideBorder from '../assets/11645175_4985-ai.png';
import PWedding from "../assets/perewed1.png"

function home() {
    return (
        <div id="home" className="w-full h-screen relative">
            <div className="absolute top-0 bg-cover w-full h-52 md:h-72 md:w-[36rem] opacity-70" style={{ backgroundImage: `url(${BorderTop})` }}></div>
            <div className=" z-[888] absolute w-full top-2/4 -translate-y-2/4">
                <div className='w-full h-[26rem] flex flex-col justify-between items-center text-amber-500 '>
                    <h1 className='text-sm rounded-full px-2 bg-amber-500 text-white'>The Wedding of</h1>
                    <div className="relative top-1 my-4 w-full bg-green-400">
                        <div className='absolute shadow-lg h-52 w-52 bg-cover rounded-full  top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4' style={{ backgroundImage: `url(${PWedding})` }}>
                        </div>
                        <div className='absolute rounded-full h-72 w-72 bg-cover top-2/4 -translate-y-2/4  left-2/4 -translate-x-2/4' style={{ backgroundImage: `url(${BrideBorder})` }}>
                        </div>

                        {/* <div className="absolute animate-spinSlow h-52 w-52 bg-gradient-to-r from-amber-400 to-sky-400 blur-md rounded-full"></div>                    
                        <div className="relative duration-1000 h-52 w-52 rounded-full border-[3px] border-amber-400 bg-cover" style={{ backgroundImage: `url(${PWedding})` }}>
                        </div> */}
                    </div>
                    <div>
                        <h1 className="text-5xl font-def font-bold">
                            Walid & Mila
                        </h1>
                        <h1 className="text-center text-base mt-2 bg-sky-900 shadow-lg py-1 px-2 rounded-lg text-white">Sabtu, 16 April 2024</h1>

                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 bg-cover w-full h-52 md:h-96 md:hidden opacity-70" style={{ backgroundImage: `url(${BorderBot})` }}></div>
        </div>
    )
}

export default home