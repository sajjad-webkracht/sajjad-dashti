import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Scrollup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null);
    const iconRef = useRef(null);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    useEffect(() => {
        const button = buttonRef.current;
        const icon = iconRef.current;
        if (!button || !icon) return; // Add null check

        const handleMouseMove = (event) => {
            const rect = button.getBoundingClientRect();
            const x = event.clientX - rect.left - rect.width / 2;
            const y = event.clientY - rect.top - rect.height / 2;
            gsap.to(icon, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        const handleMouseLeave = () => {
            gsap.to(icon, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.3)'
            });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]); // Add isVisible as a dependency

    useEffect(() => {
        const button = buttonRef.current;
        if (isVisible) {
            gsap.fromTo(button, 
                { y: 50, opacity: 0, filter: 'blur(10px)' }, 
                { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
            );
        } else {
            gsap.to(button, 
                { y: 50, opacity: 0, filter: 'blur(10px)', duration: 1, ease: 'power2.out' }
            );
        }
    }, [isVisible]);

    return (
        <div className="scroll-to-top">
            {isVisible && 
                <div className='fixed bottom-4 right-4 md:bottom-12 md:right-12 hover:-translate-y-1 hover:scale-105 duration-500'>
                    <button ref={buttonRef} className='relative bg-zinc-800 text-zinc-50 p-4 w-full h-full' onClick={scrollToTop} style={{ opacity: 0, filter: 'blur(10px)' }}>
                        <svg
                            ref={iconRef}
                            className="w-7 h-7 md:w-10 md:h-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                        </svg>
                    </button>
                </div>
            }
        </div>
    );
};

export default Scrollup;