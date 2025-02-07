import React, { useState } from 'react';
import Dribbble from '../images/dribbble.svg'
import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'
import Linkedin from '../images/linkedin.svg'

const Footer = () => {
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText('hi@sajjaddashti.ir');
        setIsPopupVisible(true);
        setTimeout(() => {
            setIsPopupVisible(false);
        }, 3000);
    };

    return (
        <footer className="xl:max-w-screen-2xl xl:mx-auto mt-20 py-8">
            <div className="m-4 mt-12 md:my-8 md:mx-12 bg-zinc-900 px-6 py-8 md:p-16">
                <div className='flex gap-12 items-stretch'>
                    <h2 className="w-full md:w-1/2 text-zinc-50 text-3xl md:text-4xl leading-none mb-8">Interested? <br /> just <span className="underline decoration-red-600 cursor-pointer" onClick={handleEmailClick}><b>say hi</b></span>.</h2>
                </div>
                <div className="flex-col md:flex-row flex gap-6 md:gap-32 mt-8">
                    <div>
                        <h3 className="text-base md:text-lg text-zinc-50"><b>Copyright</b></h3>
                        <p className="text-base md:text-lg text-zinc-400 mt-2">© 2025 Sajjad Dashti</p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg text-zinc-50"><b>Contact</b></h3>
                        <p className="text-base md:text-lg text-zinc-400 mt-2 cursor-pointer" onClick={handleEmailClick}>hi@sajjaddashti.ir</p>
                    </div>
                    <div>
                        <h3 className="text-base md:text-lg text-zinc-50"><b>Social Media</b></h3>
                        <div className="flex gap-3 mt-2">
                            <a href="https://dribbble.com/Sajjaddashti" className="hover:scale-125 transition-all duration-75"><img src={Dribbble} alt="My Dribbble page" /></a>
                            <a href="https://x.com/saggad_dashti" className="hover:scale-125 transition-all duration-75"><img src={Twitter} alt="My X page" /></a>
                            <a href="https://www.instagram.com/sajjaddashtin?igsh=MXNjaDJ0YzJ5bjht" className="hover:scale-125 transition-all duration-75"><img src={Instagram} alt="my Instagram page" /></a>
                            <a href="https://www.linkedin.com/in/sajjad-dashti-nezhad-4386ab144/" className="hover:scale-125 transition-all duration-75"><img src={Linkedin} alt="my Linkedin page" /></a>
                        </div>
                    </div>
                </div>

                {isPopupVisible && (
                    <div className="fixed bottom-1/2 left-4 right-4 md:w-auto md:left-1/2 transform md:-translate-x-1/2 bg-zinc-800 text-zinc-50 px-6 py-5 text-center">
                        Email address copied to clipboard
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;