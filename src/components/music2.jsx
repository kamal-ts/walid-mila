import React, { useEffect, useState } from 'react'

const Music2 = ({ audioSrc }) => {

    const [isPlaying, setIsPlaying] = useState(true); // Mengatur isPlaying menjadi true agar otomatis diputar

    useEffect(() => {
        const audio = document.getElementById('audio');
        if (isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, [isPlaying]);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <audio id="audio" autoPlay src={audioSrc} />
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    );
}

export default Music2