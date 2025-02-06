import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';
import Thumbnail from '../components/thumbnail';
import UXRMethods from '../images/uxrmethods/uxrmethods-thumbnail.png';
import ThreeDViewer from '../images/3dviewer/3d-viewer-thumbnail.png';
import Figma from '../images/3dviewer/figma-plugin.svg';    
import Heuristics from '../images/heuristics/heuristics-thumbnail.png';

gsap.registerPlugin(ScrollTrigger);

const Community = () => {

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
            <h1 className='text-3xl text-center font-bold case-item'>Community Work</h1>
            <p className='text-base px-4 md:w-2/3 text-center case-item'>As a design community, we are like a family. Here are a few projects I've developed for free as my contribution to the design community.</p>
            <div className='flex w-full flex-col mt-8 px-4 md:px-12'>
                <a href="https://heuristics.info/" target='_blank' className='case-item'>
                    <Thumbnail src={Heuristics} alt="Heuristics" title="Heuristics" />
                </a>
                <div className='flex flex-col lg:flex-row gap-4 md:gap-8 mt-4 md:mt-8'>
                    <div className='w-full lg:w-1/2'>
                        <a href="https://uxrmethods.org/" target='_blank' className='case-item'>
                            <Thumbnail src={UXRMethods} alt="UXRMethods" title="UXRMethods" />
                        </a>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <a href="https://www.figma.com/community/plugin/1422877732788770900/simple-3d-viewer" target='_blank' className='case-item relative block'>
                            <img src={Figma} alt="Figma plugin logo" class="absolute top-0 right-6 md:right-8 h-16 md:h-28" />
                            <Thumbnail src={ThreeDViewer} alt="3D Viewer" title="3D Viewer" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Community;