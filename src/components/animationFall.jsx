import '../Anim.css'
import Leaf1 from '../assets/1.png';
import Leaf2 from '../assets/2.png';
import Leaf3 from '../assets/3.png';


import React, { useEffect, useState } from 'react'

const AnimationFall = () => {


    const LeafImage = [Leaf1, Leaf2, Leaf3];
    const [leaves, setLeaves] = useState([]);

    useEffect(() => {
        const createLeaf = () => {
            const size = Math.random() * 40 + 20;
            const speed = Math.random() * 0.5 + 1;
            const delay = Math.random() * 2;
            const opacity = Math.random() * 5;
            const backgroundImage = Math.floor(Math.random() * 3);
            // console.log('backgroundImage', backgroundImage)
            // console.log('size', size)
            const x = Math.random() * window.innerWidth;
            const leaf = { x, y: -size, size, speed, delay, opacity, backgroundImage };
            setLeaves(prevLeaves => [...prevLeaves, leaf]);
        };

        const interval = setInterval(createLeaf, 3000);

        return () => clearInterval(interval);
    }, []);

    const updateLeaves = () => {
        setLeaves(prevLeaves =>
            prevLeaves.map(leaf => ({
                ...leaf,
                y: leaf.y + leaf.speed,
            }))
        );
    };

    useEffect(() => {
        const animationFrame = requestAnimationFrame(updateLeaves);
        return () => cancelAnimationFrame(animationFrame);
    }, [leaves]);



    return (
        <div className="absolute App h-full left-0">
            {leaves.map((leaf, index) => (
                <div

                    key={index}
                    className="leaf bg-cover animate-spinSlow z-[1000]"
                    style={{
                        backgroundImage: `url(${LeafImage[leaf.backgroundImage]})`,
                        left: leaf.x,
                        top: leaf.y,
                        width: leaf.size,
                        height: leaf.size,
                        opacity: leaf.opacity,
                        animationDelay: `${leaf.delay}s`,
                        // transform: `rotate(${leaf.rotation}deg)`,
                    }}
                ></div>
            ))}
        </div>
    )
}

export default AnimationFall