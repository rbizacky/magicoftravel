import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle.jsx";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
    useGSAP(()=>{
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: '0',
        });
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to Magic of Travel
                </h2>

                <AnimatedTitle title="Rev<b>e</b>al the world&#39;s <br/> m<b>o</b>st hid<b>d</b>en gems" containerClass="mt-5 !text-black text-center" />



                <div className="about-subtext">
                    <p>With our background and services, your satisfaction is guaranteed</p>
                    <p className="opacity-60">Tell us where you want to go, and we&#39;ll help you figure out the rest</p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image">
                    <img
                    src="img/about.webp"
                    alt="Background"
                    className=" absolute left-0 top-0 size-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
