import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Button = ({ children, direction }) => {
    const [dotLottie, setDotLottie] = useState(null);

    const dotLottieRefCallback = (dotLottie) => {
      setDotLottie(dotLottie);
    };
  
    const handleMouseEnter = () => {
      if (dotLottie) {
        dotLottie.play();
      }
    };

    
    return (
        <span className='text-zinc-50 bg-zinc-900 px-8 py-4 hover:px-10 duration-500 inline-flex items-center' onMouseEnter={handleMouseEnter}>
            {direction === 'back' && (
                <div className='flex items-center'>
                    <DotLottieReact
                        src="/static/back-icon.lottie"
                        dotLottieRefCallback={dotLottieRefCallback}
                        className='w-6 h-6 mr-4 -ml-3'
                    />
                    {children}
                </div>

            )}
            {direction === 'next' && (
                <div className='flex items-center'>
                    {children}
                    <DotLottieReact
                        src="/static/back-icon.lottie"
                        dotLottieRefCallback={dotLottieRefCallback}
                        className='w-6 h-6 ml-4 -mr-3 rotate-180'
                    />
                </div>
            )}
            {direction === 'down' && (
                <div className='flex items-center'>
                    {children}
                    <DotLottieReact
                        src="/static/back-icon.lottie"
                        dotLottieRefCallback={dotLottieRefCallback}
                        className='w-6 h-6 ml-4 -mr-3 -rotate-90'
                    />
                </div>
            )}
            {direction === 'none' && (
                <div className='flex items-center'>
                    {children}
                </div>
            )}
        </span>
    );
};

export default Button;