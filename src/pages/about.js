import React, { useState } from 'react';
import Header from "../components/header"
import Footer from "../components/footer"
import Scrollup from "../components/scrollup"
import Button from "../components/button"
import { Link } from 'gatsby';
import Me from '../images/me.png';
import Skills from '../images/skills.svg';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Seo from '../components/seo'

const About = () => {
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
    <main className="font-sans bg-black">
      <Header />
      <div className='pt-4 px-4 md:pb-12 md:px-12 xl:max-w-screen-2xl xl:mx-auto'>
        <Link to="/">
          <Button direction={'back'}>
            Back to Home
          </Button>
        </Link>

        <div className="mt-12 flex flex-col md:flex-row gap-4 md:gap-24 items-center">
          <div className="w-full md:w-1/2">
            <h1 className='text-4xl md:text-5xl text-white mb-4 md:mb-6'>About <span className="font-bold decoration-red-600 underline">Me</span></h1>
            <p className='text-base md:text-base text-zinc-50'>Hi, I’m Sajjad Dashti, a Persian UI/UX designer, illustrator, motion designer, graphic designer and creative developer. I reside in a charming small town in northern <strong>Iran</strong>. My passion lies in creating a more beautiful world through human-oriented design that genuinely serves people’s needs, rather than taking advantage of them.</p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={Me} alt="Sajjad Dashti" className="w-full h-80 2xl:h-96 object-cover" />
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row gap-24">
          
          <div class="w-full md:w-1/2 text-zinc-50">
            <h2 class="text-3xl mb-1 font-bold">My Story</h2>
            <h3 className="text-lg mb-4 font-bold">Learn More About My Journey</h3>
            <p class="text-base mb-3">From a young age, I immersed myself in the world of graphic design. At just 10 years old, my favorite pastime was using Photoshop and 3D Max to create captivating visuals. It felt like my own video game, and that passion has stayed with me ever since.</p><p>
            </p><p class="text-base">My professional journey began around a decade ago when I joined <a href="https://en.wikipedia.org/wiki/Esperanto_(magazine)" class="text-red-600 decoration-red-600 underline">Esperanto</a> magazine as a graphic designer. Over the years, I’ve honed my skills, transitioning into an experienced UI/UX designer. Along the way, I’ve also dabbled in front-end development at <a href="https://www.webkracht.nl/" class="text-red-600 decoration-red-600 underline"> Wekracht</a>. This diverse experience allows me to collaborate effectively with developers, ensuring the best possible outcomes for the project.</p>
          </div>

          <div class="w-full md:w-1/2 text-zinc-50">
            <h2 class="text-3xl mb-1"><b>My Life Beyond Work</b></h2>
            <h3 className="text-lg mb-4 font-bold">I'm Not a Boring Person</h3>
            <p class="text-base mb-3">When I step away from my professional endeavors, I immerse myself in the world of music. My beloved little instrument is the harmonica, and I find solace in playing classical repertoire. While I have a special affinity for Baroque-era compositions, I also enjoy exploring the works of Romantic-era composers.</p><p>
            </p><p class="text-base mb-3">Beyond music, I’m an amateur photographer with a passion for capturing beautiful moments. Armed with my trusty Fujifilm camera, I seek out scenes that evoke emotion and wonder. You can explore my photography on my <a href="https://www.instagram.com/sajjaddashtin?igsh=MXNjaDJ0YzJ5bjht" class="text-red-600 decoration-red-600 underline"> Instagram page</a>.</p>
            <p class="text-base">And also, I proudly speak and advocate for Esperanto, the international language for peace.</p>
          </div>

        </div>

        <div class="mt-24 py-10 md:pb-16 md:pt-8 gap-8 md:gap-16 xl:max-w-screen-2xl xl:mx-auto">
          <div class="text-zinc-50">
            <h2 class="text-3xl mb-4"><b>My Working Journey</b></h2>
            <p class="text-base mb-3 max-w-xl">In the span of a decade, my quest in the realm of professional design led me to lands and wonders beyond the wildest imaginings of Middle-earth. (Yeah, I’m a fan of The Lord of the Rings)</p><p>
            </p><div class="mt-8 flex flex-row gap-4 md:gap-0 md:flex-col">
              <div class="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 md:mb-2 gap-8">
                <h3 class="text-zinc-50 text-base">2015</h3>
                <h3 class="text-zinc-50 text-base">2018</h3>
                <h3 class="text-zinc-50 text-base">2019</h3>
                <h3 class="text-zinc-50 text-base">2021</h3>
              </div>
              <div class="relative h-auto md:h-auto md:w-full md:mb-6 md:mt-4">
                <div class="bg-zinc-50 w-1 h-full md:w-full md:h-1 rounded-md"></div>
                <div class="absolute -left-2 top-0 h-full md:-top-2 md:left-auto w-full">
                  <div class="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-8 w-full h-full">
                    <div class="bg-zinc-50 w-5 h-5 rounded-full"></div>
                    <div class="bg-zinc-50 w-5 h-5 rounded-full"></div>
                    <div class="bg-zinc-50 w-5 h-5 rounded-full"></div>
                    <div class="bg-zinc-50 w-5 h-5 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div class="grid grid-rows-4 md:grid-rows-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 class="text-zinc-50 text-base"><b>Graphic Designer</b></h3>
                  <p class="text-zinc-50 text-sm">for magazines such as Umujo, Esperanto, MTECH, La Lampiro</p>
                </div>
                <div>
                  <h3 class="text-zinc-50 text-base"><b>Graphic Designer</b></h3>
                  <p class="text-zinc-50 text-sm">at Webotel</p>
                </div>
                <div>
                  <h3 class="text-zinc-50 text-base"><b>UI/UX Designer, Front-End Developer</b></h3>
                  <p class="text-zinc-50 text-sm">at Webkracht</p>
                </div>
                <div>
                  <h3 class="text-zinc-50 text-base"><b>UI/UX Designer, Graphic Designer</b></h3>
                  <p class="text-zinc-50 text-sm">at Ariva</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-24 md:pb-16 md:pt-8 xl:max-w-screen-2xl xl:mx-auto hidden md:block">
          <div class="text-zinc-50">
            <h2 class="text-3xl mb-4"><b>My Core Skills</b></h2>
            <p class="text-base mb-3 max-w-xl">Here’s the spread of my core skills.</p><p>
            </p>
          </div>
          <div class="mt-12 md:my-8 bg-zinc-900 px-6 py-8 md:p-16">
            <img src={Skills} alt="Skills" className="w-full h-auto" />
          </div>
        </div>

        <div class="pt-10 md:pt-10 xl:max-w-screen-2xl xl:mx-auto">
          <div class="text-zinc-50 mb-8">
            <h2 class="text-3xl mb-4"><b>Interested in Collaborating with Me?</b></h2>
            <p class="text-base mb-3">You can download my resume&nbsp;here, and feel free to reach out at <a href="mailto:hi@sajjaddashti.ir" class="text-red-600 decoration-red-600 underline">hi@sajjaddashti.ir</a>.</p><p>
            </p>
          </div>
          <a href="/static/CV.pdf" class="w-full object-cover overflow-hidden bg-zinc-900 items-center justify-between flex p-4 md:p-8 duration-500 group hover:bg-zinc-800" onMouseEnter={handleMouseEnter}>
            <p class="text-lg md:text-xl text-zinc-50 font-bold duration-500 group-hover:tracking-wide">Download My Résumé</p>
              <DotLottieReact
                src="/static/back-icon.lottie"
                dotLottieRefCallback={dotLottieRefCallback}
                className='w-5 h-5 md:w-9 md:h-9 -rotate-90'
              />
          </a>
        </div>


      </div>

      <Footer />
      <Scrollup />
    </main>
  )
}

export default About

export const Head = () => (
  <Seo 
    title="About" 
    description="Hi, I’m Sajjad Dashti, a Persian UI/UX designer, illustrator, motion designer, graphic designer and creative developer. I reside in a charming small town in northern Iran." 
  />
)