

import { useState, useEffect, useRef } from 'react'

const Music = ({ audioSrc, type }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio(audioSrc));

    useEffect(() => {
        const audio = audioRef.current;

        const handleEnded = () => {
            setIsPlaying(false);
            audio.currentTime = 0; // Setel ulang audio ke awal
            if (isPlaying) {
                audio.play(); // Jika sedang dimainkan, putar kembali
            }
        };

        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('ended', handleEnded);
        };
    }, [isPlaying]);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };


    return (


        <div className="relative">

            {type === 1 && (
                <div>
                    <button
                    className='w-full bg-amber-500 hover:text-white rounded-lg p-2 font-bold' onClick={togglePlay}>Buka Undangan</button>
                </div>
            )}
            {type === 2 && (
                <div>
                    <button className='w-full bg-red-400' onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                </div>
            )}
        </div>
    )
}

export default Music