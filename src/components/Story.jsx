import React, { useRef } from 'react'
import AnimatedTitle from "./AnimatedTitle.jsx";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners.jsx";
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";

const Story = () => {
    const frameRef = useRef('null');

    const handleMouseLeave = () => {
        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: 'power1.inOut',
        })
    }

    const navigate = useNavigate();

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if(!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: 'power1.inOut',
        })
    }

    return (
        <section id='story' className="min-h-dvh w-screen bg-black text-blue-50">
            <div className="flex size-full flex-col items-center py-10 pb-24">
                <p className='font-general text-sm uppercase md:text-[10px]'>Unique life experiences</p>

                <div className="relative size-full">
                    <AnimatedTitle
                    title="The Magic <br/> of travel"
                    sectionID="#story"
                    containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
                    />
                    <div className="story-img-container">
                        <div className="story-img-mask">
                            <div className="story-img-content">
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src="/img/entrance.jpg"
                                    alt="entrance"
                                    className="object-contain"
                                />
                            </div>
                        </div>

                        <RoundedCorners />

                    </div>
                </div>

                <div className="-mt-80 flex w-full justify-center items-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular-web text-orange-50 md:text-start">
                            Even in the age of online booking, travel agents are a great source of information and discounts
                        </p>
                        <Button
                            id="learnMore-button"
                            title="Learn More"
                            containerClass="mt-5"
                            onClick={() => navigate("/about")}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Story;
