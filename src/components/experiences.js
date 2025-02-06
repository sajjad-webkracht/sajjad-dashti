import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';
import Thumbnail from '../components/thumbnail';
import Winee3 from '../images/winee3/winee3-thumbnail.png';
import Aloisia from '../images/aloisia/aloisia-thumbnail.png';  
import Wonderland from '../images/wonderland/wonderland-thumbnail.png';

gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {

    const experiencesRef = useRef(null);

    useEffect(() => {
        const elements = experiencesRef.current.querySelectorAll('.case-item');

        gsap.from(elements, {
            scrollTrigger: {
                trigger: experiencesRef.current,
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
        <div ref={experiencesRef} className='text-zinc-50 xl:max-w-screen-2xl xl:mx-auto mt-32 flex flex-col items-center'>
            <h1 className='text-3xl text-center font-bold case-item'>Job Experiences</h1>
            <p className='text-base px-4 md:w-2/3 text-center case-item'>Check out some of the work experiences that I’ve had so far in more than a decade of being in the design world.</p>
            <div className='flex w-full flex-col mt-8 px-4 md:px-12'>
                <Link to="/projects/winee3" className='case-item'>
                    <Thumbnail src={Winee3} alt="Winee3" title="Winee3" />
                </Link>
                <div className='flex flex-col lg:flex-row gap-4 md:gap-8 mt-4 md:mt-8'>
                    <div className='w-full lg:w-1/2'>
                        <Link to="/projects/wonderland" className='case-item'>
                            <Thumbnail src={Wonderland} alt="Wonderland" title="Wonderland" />
                        </Link>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <Link to="/projects/aloisia" className='case-item'>
                            <Thumbnail src={Aloisia} alt="Aloisia" title="Aloisia" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiences;