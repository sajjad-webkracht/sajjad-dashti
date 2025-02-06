import React from 'react';

const Thumbnail = ({ src, alt, title }) => {
    return (
        <div class="overflow-x-hidden bg-zinc-900 text-zinc-50 flex justify-stretch w-full md:delay-[50ms] md:duration-[600ms] md:taos:translate-y-[200px] md:taos:opacity-0 group lg:h-64 taos-init" >
            <div class="flex justify-center items-center duration-[600ms] group-hover:md:w-28 md:w-24 w-16">
                <h2 class="whitespace-nowrap text-xl md:text-2xl rotate-90 m-0 group-hover:px-1 duration-[600ms] after:block after:content-[''] after:absolute after:h-[3px] after:bg-red-600 after:w-full after:scale-x-0 after:group-hover:scale-x-100 after:transition after:duration-300 after:origin-left"><b>{title}</b></h2>
            </div>
            <img src={src} alt={alt} class="object-cover h-52 md:h-auto w-full" />
        </div>
    );
};

export default Thumbnail;