import React from 'react';
import Character from '../components/character';
import Title from '../components/title';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';



const Hero = () => {

    return (
        <div className='relative'>
            <div className='pb-32 pt-24 overflow-hidden'>
                <div className='w-full overflow-clip'>
                    <DotLottieReact
                        src="/static/text-loop.lottie"
                        loop
                        autoplay
                        speed={0.3}
                        className='w-[1920px] h-[100px]'
                    />
                </div>
                <Title />
            </div>
            <Character />
            <div className='h-24 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent z-20' />
        </div>
    );
};

export default Hero;