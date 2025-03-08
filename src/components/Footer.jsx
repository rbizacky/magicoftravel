import React from 'react'
import { FaXTwitter, FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa6";

const Links = [
    { href: 'https://x.com/Magic_of_Travel', icon: <FaXTwitter /> },
    { href: 'https://www.facebook.com/magicoftravelinfo/', icon: <FaFacebook /> },
    { href: 'https://www.instagram.com/magicoftravelinfo/', icon: <FaInstagram /> },
    { href: 'https://www.linkedin.com/company/magic-of-travel-info/', icon: <FaLinkedin /> },
    { href: 'https://www.pinterest.com/magicoftravelinfo/', icon: <FaPinterest /> },
]

const Footer = () => {
    return (
        <footer className="w-screen bg-green-100 py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm md:text-left">
                    Copyright &copy; 2024 Magic of Travel - All Rights Reserved
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {Links.map((link) => (
                        <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-black transition-colros duration-500 ease-in-out hover:text-white">
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}
export default Footer
