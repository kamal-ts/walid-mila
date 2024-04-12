import {useState} from 'react';
import Bri from '../assets/bank/bank-bni.svg'
import { PiClipboardTextBold } from 'react-icons/pi';
import { FaCheckCircle } from 'react-icons/fa';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const nomor='1045774191';
    
    const [inCopy, setinCopy] = useState(false);


    return (
        <div className="fixed z-[1000] inset-0 overflow-y-auto flex items-center justify-center transition-all ">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white w-[95%] md:w-80 p-4 rounded-lg shadow-lg">

                <div className='flex flex-row justify-between items-center border-b-2 pb-2 mb-4 '>

                    <div className="text-lg font-bold  text-sky-950 ">Amplop Digital</div>
                    <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                </div>
                <div className='flex flex-col items-center justify-center font-bold'>


                    <img src={Bri} alt="" className='h-20' />
                    <h6 className="text-gray-700 mt-4 font-medium"><span className='text-orange-500 font-bold'>{nomor}</span> BNI a.n Walid djuna</h6>
                    <button 
                    onClick={() => {
                        navigator.clipboard.writeText(nomor);
                        setinCopy(true)
                    }}
                    className='px-4 py-2 bg-sky-900 rounded mt-4 text-sm flex items-center justify-center gap-2 transition-all'>
                        {!inCopy && (
                            <PiClipboardTextBold/>
                        )}
                        {inCopy && (
                            <FaCheckCircle/>
                        )}
                        
                        <p>Salin Nomor</p>
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
