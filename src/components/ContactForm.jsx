import React from 'react'
import AnimatedTitle from "./AnimatedTitle.jsx";
import Button from "./Button.jsx";
import { TiLocationArrow } from "react-icons/ti";
import Swal from 'sweetalert2/dist/sweetalert2.js';

const ContactForm = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "998f842a-1e7d-4986-8d81-86a6092dc772");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            Swal.fire({
                title: "Your request was submitted!",
                text: "Thanks for reaching we will be in touch as soon as we process your request!",
                icon: "success"
            });
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }

    return (
        <section className="contact">
            <div className="">
                <form onSubmit={onSubmit}>
                    <AnimatedTitle
                        title="Contact Form"
                        sectionID="contact-form"
                        containerClass="mt-5 !text-black"
                    />
                    <div className="input-box">
                        <label className="font-general">Full Name</label>
                        <input type="text" className="field"
                               placeholder="Enter your name" name="name" required/>
                    </div>
                    <div className="input-box">
                        <label className="font-general">Email</label>
                        <input type="email" className="field"
                               placeholder="Enter your email" name="email" required/>
                    </div>
                    <div className="input-box">
                        <label className="font-general">Message</label>
                        <textarea name="message" className="field mess"
                                  placeholder="Enter your request" required></textarea>
                    </div>
                    <Button
                        containerClass="w-full flex items-center justify-center h-[55px] mt-5 rounded-base"
                        title="Submit"
                        type="submit"
                        rightIcon={<TiLocationArrow/>}
                    />
                </form>
                <span>{result}</span>
            </div>
        </section>
    );
}
export default ContactForm;
