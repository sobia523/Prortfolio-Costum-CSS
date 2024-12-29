
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface propsType {
    title: string;
    desc: string;
    img: string;
    tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Ye code sirf client-side pe chalega
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        // Initial resize check
        handleResize();

        // Resize event listener add karte hain
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`card ${isMobile ? '' : 'card-sm'}`} data-aos="zoom-in-up">
            <div>
                <Image
                    className="card-images card-images-sm"
                    src={img}
                    width={350}
                    height={350}
                    alt={title}
                />
            </div>
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div>{desc}</div>
                <div>
                    {tags.map((el) => (
                        <div className="card-tags" key={el}>
                            {el}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;
