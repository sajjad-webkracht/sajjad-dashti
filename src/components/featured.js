import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';
import Thumbnail from '../components/thumbnail';
import Winee3 from '../images/winee3/winee3-thumbnail.png';
import Aloisia from '../images/aloisia/aloisia-thumbnail.png';
import Wonderland from '../images/wonderland/wonderland-thumbnail.png';
import Ecco from '../images/Ecco-Thumbnail.png';
import Lilly from '../images/lilly/Lilly-Thumbnail.png';
import Hathor from '../images/Hathor-Thumbnail-v3.png';

gsap.registerPlugin(ScrollTrigger);


const Cases = () => {

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
        <div ref={experiencesRef} className='text-zinc-50 xl:max-w-screen-2xl xl:mx-auto mt-24 md:mt-32 flex flex-col items-center'>
            <h1 className='text-3xl text-center font-bold case-item'>My Featured Works</h1>
            <p className='text-base px-4 md:w-2/3 text-center case-item'>A selection of highlights from my career as a product designer, graphic designer, and motion designer—featuring both client projects and personal creations.</p>
            <div className='flex w-full flex-col mt-8 px-4 md:px-12'>
                <Link to="/projects/lilly" className='case-item'>
                    <div class="overflow-x-hidden bg-zinc-900 text-zinc-50 flex justify-stretch w-full md:delay-[50ms] md:duration-[600ms] md:taos:translate-y-[200px] md:taos:opacity-0 group lg:h-96 taos-init" >
                        <div class="flex justify-center items-center duration-[600ms] group-hover:md:w-28 md:w-24 w-16">
                            <h2 class="whitespace-nowrap text-xl md:text-2xl rotate-90 m-0 group-hover:px-1 duration-[600ms] after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-600 after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left"><b>Lilly Icon</b></h2>
                        </div>
                        <img src={Lilly} alt='Ecco Icon' class="object-cover h-52 md:h-auto w-full" />
                    </div>
                </Link>
            </div>
            <div className='flex w-full flex-col mt-8 px-4 md:px-12'>
                <Link to="/projects/ecco" className='case-item'>
                    <div class="overflow-x-hidden bg-zinc-900 text-zinc-50 flex justify-stretch w-full md:delay-[50ms] md:duration-[600ms] md:taos:translate-y-[200px] md:taos:opacity-0 group lg:h-96 taos-init" >
                        <div class="flex justify-center items-center duration-[600ms] group-hover:md:w-28 md:w-24 w-16">
                            <h2 class="whitespace-nowrap text-xl md:text-2xl rotate-90 m-0 group-hover:px-1 duration-[600ms] after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-600 after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left"><b>Ecco Icon</b></h2>
                        </div>
                        <img src={Ecco} alt='Ecco Icon' class="object-cover h-52 md:h-auto w-full" />
                    </div>
                </Link>
            </div>
            <div className='flex w-full flex-col mt-8 px-4 md:px-12'>
                <Link to="/projects/winee3" className='case-item'>
                    <Thumbnail src={Winee3} alt="Winee3" title="Winee3" />
                </Link>
                <div className='flex flex-col lg:flex-row gap-8 mt-8'>
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
            <div className='flex w-full flex-col mt-8 px-4 md:px-12'>
                <Link to="/projects/hathor" className='case-item'>
                    <Thumbnail src={Hathor} alt="Hathor Case Study" title="Hathor" />
                </Link>
            </div>
        </div>
    );
};

export default Cases;