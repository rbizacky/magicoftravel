import React from 'react'
import Button from "./Button.jsx";
import { useNavigate } from "react-router-dom";

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src}/>
    </div>
)

const Agent = () => {

    const navigate = useNavigate();

    return (
        <div id="contact" className="my-20 min-h-96 w-screen px-10">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <img src="img/contact-2.jpg" className="flex rounded-lg w-72 h-72"/>
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="font-general text-[10px] uppercase">
                        Start your booking
                    </p>
                    <p className="special-font mt-10 w-full font-zentry text-xl leading-[0.9] md:text-[6rem] z-10 drop-shadow-md">
                        Are you ready <br /> to experience a <br /> real vacation?
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Agent
