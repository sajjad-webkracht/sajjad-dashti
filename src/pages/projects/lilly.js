import React from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import Scrollup from "../../components/scrollup"
import Button from "../../components/button"
import { Link } from 'gatsby';
import MainImage from '../../images/lilly/Main.png';
import Brief from '../../components/project_brief';
import Description from '../../components/project_description';
import ReactPlayer from 'react-player';
import UIVideo from '../../videos/lilly_presentation.mp4';
import FigmaPlugin from '../../videos/lilly_plugin.mp4';
import Icons from '../../images/lilly/lilly-icons-together.png';
import Userflow from '../../images/lilly/userflow.svg';
import UserflowPhone from '../../images/lilly/userflow_phone.svg';
import ProjectNavigation from '../../components/project_navigation';
import Seo from '../../components/seo'

const Lilly = () => {


    return (
        <main className="font-sans bg-black">
            <Header />
            <div>
                <div className='pt-4 px-4 md:pb-12 md:px-12 xl:max-w-screen-2xl xl:mx-auto'>
                    <Link to="/">
                        <Button direction={'back'}>
                            Back to Home
                        </Button>
                    </Link>
                </div>

                <img src={MainImage} alt="Lilly" className="w-full h-72 md:h-96 object-cover" />

                <div className='pt-4 px-4 md:pb-6 md:px-12 xl:max-w-screen-2xl xl:mx-auto relative'>
                    <div className='bg-zinc-900 inline-flex w-full md:w-auto flex-col py-4 md:flex-row gap-4 md:gap-8 -translate-y-10 px-8 items-center'>
                        <h1 className='text-zinc-50 font-bold text-xl md:text-3xl inline-block'>Lilly Icon</h1>
                        <span className='h-5 w-[2px] bg-red-600 hidden md:block text-center' />
                        <span className='text-zinc-50 text-lg text-center'>An Animated Rive Icon Pack</span>
                    </div>
                </div>

                <div className='pt-4 px-4 md:pb-12 md:px-12 xl:max-w-screen-2xl xl:mx-auto flex flex-col lg:flex-row gap-16 lg:gap-28'>
                    <div className='w-full lg:w-1/4'>
                        <Description
                            role={'Graphic Designer, UI/UX Designer, Motion Designer, Developer'}
                            duration={'February 2025 - Present'}
                            description={'Lilly Icon is the first icon pack to use Rive technology, delivering SVG-based animated and interactive icons designed specifically for user interfaces.'}
                            linkActive={true}
                            link={'https://lillyicon.com/'}
                            title={'Visit Lilly Icon'}
                        />
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <Brief
                            brief={'Lilly Icon is a platform where users can explore and download animated icons built with Rive technology. Rive enables the creation of vector-based, animated, and interactive icons tailored for modern user interfaces. This project is completely free and supported solely through user donations.'}
                            problem={"Microinteractions and subtle details make all the difference—they're what elevate great apps above the rest. Yet, many animated icon packs remain locked behind paywalls or too complex to use and customize to match a project's overall style."}
                            solution={'Lilly Icons was created to solve this problem by providing a growing collection of minimal, animated icons that are completely. Built with Rive technology, the icons are easy to customize color in real time, making them seamless to adapt to any design.'}
                        />

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>User Interface - User Experience</h2>
                            <p className='text-zinc-50'>
                                Lilly Icons keeps the user journey simple and seamless—no logins, subscriptions, or payments required. Following Jakob’s Law of UX, the site mirrors the familiar experience of major paid platforms, so users know exactly what to expect. Just browse the icons, click the ones you like, and download them in .riv, .png, or .svg formats. Each icon also comes with a shareable link.
                            </p>
                            <div className='mt-8'>
                                <ReactPlayer
                                    url={UIVideo}
                                    controls={true}
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>User Flow</h2>
                            <p className='text-zinc-50 mb-2'>
                                A good user flow minimizes steps and eliminates friction wherever possible. In my view, the best user flow is the simplest one. With that in mind, I designed Lilly Icon to keep things incredibly straightforward—completing the core task takes no more than four steps from start to finish.
                            </p>
                            <div className='mt-8 bg-zinc-900 p-4 md:p-10'>
                                <img src={Userflow} alt="User Flow" className='w-full h-auto hidden md:block' />
                                <img src={UserflowPhone} alt="User Flow" className='w-full h-auto block md:hidden' />
                            </div>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Designing and Animating Icons</h2>
                            <p className='text-zinc-50 mb-2'>
                                The icons are intentionally minimal, making them ideal for both web and app user interfaces. By limiting visual detail, each icon remains clear and easily recognizable—even at smaller sizes. They are monochromatic by default, but thanks to Rive’s Data Binding feature, developers can easily change their colors at runtime.
                            </p>
                            <p className='text-zinc-50 mb-2'>
                                The icons are aligned to a 24px grid and include a 2px padding/safe area for animations and effects, creating a 20x20px live area for the static icon. This consistent and adaptable structure ensures the icons can be seamlessly integrated into diverse interfaces.
                            </p>
                            <div className='mt-8 bg-zinc-900'>
                                <img src={Icons} alt="Icons" className='w-full h-auto' />
                            </div>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Website Development</h2>
                            <p className='text-zinc-50 mb-2'>
                                The Lilly Icon website is built with Gatsby, a React-based static site generator. It uses Tailwind CSS for styling and integrates animated icons through the rive-react library. The site is hosted on Netlify for fast and reliable performance.
                            </p>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Figma Plugin Development</h2>
                            <p className='text-zinc-50'>
                                To make it easier for designers to use the Lilly Icon pack, I created a Figma plugin that lets users insert SVG versions of the icons directly into their designs. The icons are hosted on GitHub Pages, and the plugin’s interface is styled to match the website for a seamless, cohesive experience.
                            </p>
                            <div className='mt-8'>
                                <ReactPlayer
                                    url={FigmaPlugin}
                                    controls={true}
                                    width='100%'
                                    height='100%'
                                />
                            </div>
                        </div>


                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Ongoing Evolution</h2>
                            <p className='text-zinc-50 mb-2'>
                                This project is a continuous work in progress—and I hope it always will be. My goal is to keep expanding the icon pack by regularly adding new designs.
                            </p>
                            <p className='text-zinc-50 mb-2'>
                                Along the way, I’ve gained meaningful insights into microinteractions, effective icon design, and maintaining visual consistency. More importantly, I’ve deepened my understanding of animation—refining techniques for Rive, exploring interactivity, and learning what makes animated icons truly impactful.
                            </p>
                        </div>

                        <div className='mt-20'>
                            <ProjectNavigation
                                url={'/projects/ecco'}
                                title={'Check Ecco Icon Project'}
                            />
                        </div>
                        
                    </div>
                </div>

            </div>

            <Footer />
            <Scrollup />
        </main>
  )
}

export default Lilly

export const Head = () => (
    <Seo 
      title="Lilly Icon" 
      description="Lilly Icon is the first icon pack to use Rive technology, delivering SVG-based animated and interactive icons designed specifically for user interfaces." 
    />
  )