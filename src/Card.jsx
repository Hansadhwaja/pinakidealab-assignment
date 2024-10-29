import React, { useRef } from 'react';
import arrow from './assets/right-arrow.png';
import anime from 'animejs';

const Card = ({ imgsrc, alt, title, desc }) => {
    const cardRef = useRef(null);

    const handleMouseEnter = () => {
        anime.set(cardRef.current, { rotateY: 0 });
        anime({
            targets: cardRef.current,
            rotateY: '+=360deg',
            duration: 500,
            easing: 'easeInOutSine',
        });
    };

    return (
        <div
            className="group relative bg-white rounded-sm shadow-lg p-6 transform transition w-[250px] h-[300px]"
            ref={cardRef}
            onMouseEnter={handleMouseEnter}
        >
            <div className="w-full flex-center -mt-16">
                <div className='w-[80px] h-[80px] bg-white rounded-full flex-center border-[3px] border-[#3D1A75]'>
                    <img src={imgsrc} alt={alt} width={50} height={60} />
                </div>
            </div>
            <h3 className="text-center text-[#3D1A75] font-bold text-lg mt-4">{title}</h3>
            <p className="text-center text-gray-700 font-medium text-sm mt-2">{desc}</p>

            <button className="flex-center mx-auto font-roboto-condensed gap-3 text-[#4A00E0] font-bold mt-4">
                <p>EXPLORE THIS SERVICE</p>
                <img src={arrow} alt='arrow' width={10} height={10} />
            </button>
        </div>
    );
};


export default Card;
