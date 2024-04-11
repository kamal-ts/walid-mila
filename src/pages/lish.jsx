import { FaRegEnvelope } from "react-icons/fa";

const lish = ({ toggleModal }) => {
    return (
        <div className="relative p-4 text-white">
            <div className="p-4 h-auto bg-sky-900 rounded-lg flex flex-col items-center justify-between border-2 border-white shadow-lg shadow-slate-400">
                <p className="text-center">Bagi yang berkeinginan memberikan kado pernikahan atau tanda kasih, kami juga menyediakan amplop digital pada link di bawah ini.</p>
                <button onClick={toggleModal}
                    className="px-4 py-2 mt-6 font-bold bg-white text-sky-950 rounded-md flex items-center justify-center gap-2">
                    <FaRegEnvelope />
                    <p>Amplop Digital</p>
                </button>
            </div>
        </div>
    )
}

export default lish