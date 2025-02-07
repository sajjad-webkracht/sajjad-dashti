import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Menu from '../images/menu.svg'
import Back from '../images/back.svg'
import Dribbble from '../images/dribbble.svg'
import Twitter from '../images/twitter.svg'
import Instagram from '../images/instagram.svg'
import Linkedin from '../images/linkedin.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isMenuOpen]);

    return (
        <header className='flex relative z-30 py-4 px-4 md:py-12 md:px-12 items-center justify-between xl:max-w-screen-2xl xl:mx-auto'>
            <h2 class="text-zinc-50 text-lg md:text-xl cursor-none">
                <Link to="/" className=""><b>Sajjad</b> Dashti</Link>
            </h2>
            <div class="text-zinc-50 md:flex flex-row gap-8 text-xl hidden">
                <Link href="/about" class="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">About</Link>
                <a href="https://medium.com/@saggad.dashti_64551" class="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Blog</a>
                <a href="/static/CV.pdf" class="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-600 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">Résumé</a>
            </div>

            <button class="md:hidden" onClick={toggleMenu}>
                <img src={Menu} alt="Menu Icon" />
            </button>

            <div className={`fixed top-0 py-6 pl-6  right-0 w-full h-svh flex flex-col justify-between bg-zinc-900 shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div>
                    <button className="w-full bg-zinc-800 px-4 py-4" onClick={toggleMenu}>
                        <img src={Back} alt="Menu Icon" className='h-5' />
                    </button>
                    <nav className="mt-10 flex flex-col items-start">
                        <Link to="/about" className="text-zinc-50 py-2 text-lg">About</Link>
                        <a href="https://medium.com/@saggad.dashti_64551" className="text-zinc-50 py-2 text-lg">Blog</a>
                        <a href="/static/CV.pdf" className="text-zinc-50 py-2 text-lg">Résumé</a>
                    </nav>
                </div>
                <div className='flex flex-col'>
                    <a href="mailto:hi@sajjaddashti.ir" className='text-white text-lg mb-3'>hi@sajjaddashti.ir</a>
                    <div class="flex gap-4 mb-7">
                        <a href="https://dribbble.com/Sajjaddashti" class=""><img src={Dribbble} alt="My Dribbble Page" /></a>
                        <a href="https://x.com/saggad_dashti" class=""><img src={Twitter} alt="My X Page" /></a>
                        <a href="https://www.instagram.com/sajjaddashtin?igsh=MXNjaDJ0YzJ5bjht" class=""><img src={Instagram} alt="My Instagram Page" /></a>
                        <a href="https://www.linkedin.com/in/sajjad-dashti-nezhad-4386ab144/" class=""><img src={Linkedin} alt="My LinkedIn Page" /></a>
                    </div>
                    <span className='text-zinc-400 text-base'>© 2024 Sajjad Dashti</span>
                </div>
            </div>


        </header>
    );
};

export default Header;