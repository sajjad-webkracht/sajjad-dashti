import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';
import Thumbnail from '../components/thumbnail';
import Hathor from '../images/hathor/hathor-thumbnail.png';

gsap.registerPlugin(ScrollTrigger);

const Cases = () => {

    const caseRef = useRef(null);

    useEffect(() => {
        const elements = caseRef.current.querySelectorAll('.case-item');

        gsap.from(elements, {
            scrollTrigger: {
                trigger: caseRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            stagger: 0.2,
            duration: 1,
            ease: 'power2.out',
            filter: 'blur(10px)',
            onComplete: () => {
                gsap.to(elements, { filter: 'blur(0px)', duration: 1 });
            }
        });
    }, []);

    return (
        <div ref={caseRef} className='text-zinc-50 xl:max-w-screen-2xl xl:mx-auto mt-24 md:mt-32 flex flex-col items-center'>
            <h1 className='text-3xl text-center font-bold case-item'>Case Studies</h1>
            <p className='text-base px-4 md:w-2/3 text-center case-item'>Check out some of my detailed UI/UX case studies to see how I manage all steps of UX research, wireframes, prototypes, and visual compositions.</p>
            <div className='flex w-full flex-col mt-8 px-4 md:px-12'>
                <Link to="/projects/hathor" className='case-item'>
                    <Thumbnail src={Hathor} alt="Hathor Case Study" title="Hathor" />
                </Link>
            </div>
        </div>
    );
};

export default Cases;