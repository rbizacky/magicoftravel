import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

const App = () => {
    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}
export default App;