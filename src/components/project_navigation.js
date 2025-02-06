import React from 'react';
import { Link } from 'gatsby';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';


const ProjectNavigation = ({ url, title }) => {

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
        <Link to={url} class="w-full object-cover overflow-hidden bg-zinc-900 items-center justify-between flex p-4 md:p-8 duration-500 group hover:bg-zinc-800" onMouseEnter={handleMouseEnter}>
        <p class="text-lg md:text-xl text-zinc-50 font-bold duration-500 group-hover:tracking-wide">{title}</p>
          <DotLottieReact
            src="/static/back-icon.lottie"
            dotLottieRefCallback={dotLottieRefCallback}
            className='w-5 h-5 md:w-9 md:h-9 rotate-180'
          />
      </Link>
    );
};

export default ProjectNavigation;