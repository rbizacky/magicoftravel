import { useRef, useState } from 'react'
import { TiLocationArrow } from "react-icons/ti";

const BentoTilt = ({ children, className="" }) => {
    const [transformStyle, setTransformStyle] = useState("")
    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0,98)`;

        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("")
    };

    
    return (
        <div className={className} ref={itemRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transform: transformStyle }}>
            {children}
        </div>
    )
}

const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-orange-50">
                <div>
                    <h1 className="bento-title special-font drop-shadow-md">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base drop-shadow-md">{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <section className="bg-black pb-52" id="services">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">Into the Vacation of your Dreams</p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">Experienced travelers who turned their passion into a business. Specialized in beach and Europe vacations as well as rail tours and river cruises. We are here to help you plan and book your dream vacation and take home magical memories!</p>
                </div>
                <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.webm"
                        title={<><b>C</b>ruises</>}
                        description="No matter the part of the world you have yet to explore, there is a cruise ride awaiting to guide the way"
                        type="video/webm"
                    />
                </BentoTilt>
                <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                    <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="videos/feature-2.webm"
                            title={<>E<b>u</b>rope</>}
                            description="Uncover old history and explore the old towns of Europe"
                            type="video/webm"
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="videos/feature-3.webm"
                            title={<>Beac<b>h</b>es</>}
                            description="The cleanest shorelines with clearest water await your excursion"
                            type="video/webm"
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="videos/feature-4.webm"
                            title={<><b>W</b>ine</>}
                            description="Stroll upon the most exclusive wine tasting experiences"
                            type="video/webm"
                        />
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between bg-orange-300 p-5">
                            <h1 className="bento-title special-font max-w-64 text-black"><b>G</b>roup Travel Quotes</h1>
                            <TiLocationArrow className="m-5 scale-[5] self-end"/>
                        </div>
                    </BentoTilt>
                    <BentoTilt className="bento-tilt_2">
                        <BentoCard
                        src="videos/feature-5.webm"
                        title={<>Cuisi<b>n</b>e</>}
                        description="Authentic, native cooked meals and recipes"
                        type="video/webm"
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    )
};
export default Features;
