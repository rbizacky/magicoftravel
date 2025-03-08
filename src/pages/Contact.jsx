import React from 'react'
import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const Contact = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
            <Navbar />
            <ContactForm />
            <Footer />
        </main>
    )
}
export default Contact;