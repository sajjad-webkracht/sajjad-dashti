import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';
import Thumbnail from '../components/thumbnail';
import Ecco from '../images/Ecco-Thumbnail.png';

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
            <h1 className='text-3xl text-center font-bold case-item'>My Featured Work</h1>
            <p className='text-base px-4 md:w-2/3 text-center case-item'>This is my main work, my magnum opus: an ever-increasing collection of animated icon packs named Ecco Icon. It is a free project, but any donations will help me keep it alive and expand it.</p>
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
        </div>
    );
};

export default Cases;