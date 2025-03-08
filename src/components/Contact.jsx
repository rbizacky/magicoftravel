import React from 'react'
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src}/>
    </div>
)

const Contact = () => {

    const navigate = useNavigate();

    return (
        <div id="contact" className="my-20 min-h-96 w-screen px-10">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        clipClass="contact-clip-path-1"
                        src="img/contact-1.jpg"
                    />
                    <ImageClipBox
                        clipClass="contact-clip-path-2 lg:translate-y-40 translatey-60"
                        src="img/contact-2.jpg"
                    />
                </div>
                <div className="absolute left-20 -top-40 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        clipClass="absolute md:scale-125"
                        src="img/contact-3-partial.png"
                    />
                    <ImageClipBox
                        clipClass="sword-man-clip-path md:scale-125"
                        src="img/contact-3.jpg"
                    />
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="font-general text-[10px] uppercase">
                        Start your booking
                    </p>
                    <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem] z-10 drop-shadow-md">
                        Are you ready <br /> to experience a <br /> real vacation?
                    </p>

                    <Button
                    title="Contact Us"
                    containerClass="mt-10 cursor-pointer"
                    onClick={() => navigate("/contact")}
                    />
                </div>
            </div>
        </div>
    )
}
export default Contact
