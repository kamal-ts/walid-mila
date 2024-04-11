import { useState } from 'react';
import Music from './music';
import MusicSound from "../assets/Sezairi-It'sYou.mp3";

const Modal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleModal = () => {
        setIsOpen(!isOpen);
        
    };

    return (
        <div className='relative z-[2222]'>
            {isOpen && (
                <div className="fixed inset-0 overflow-y-auto backdrop-blur-sm min-h-screen ">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="relative bg-white border-2 border-amber-500 w-[95%] md:w-96 p-4 rounded-lg shadow-lg text-sky-950 ">
                            
                            <div className="text-base font-bold mb-4 text-center underline">Wedding of Welid & Mila : </div>
                            <p>Kepada Yth.</p>
                            <div className="text-gray-700 text-base font-bold my-2">Bapak atau Ibu</div>
                            <p>Kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara kami.</p>
                            <button onClick={toggleModal} className="w-full animate-bounce shadow-xl hover:shadow-amber-300 rounded-lg mt-6 ">
                                <Music audioSrc={MusicSound} type={1}></Music>
                            </button>
                            
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;