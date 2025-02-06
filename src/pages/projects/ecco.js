import React from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import Scrollup from "../../components/scrollup"
import Button from "../../components/button"
import { Link } from 'gatsby';
import MainImage from '../../images/ecco/main.png';
import Brief from '../../components/project_brief';
import Description from '../../components/project_description';
import ReactPlayer from 'react-player';
import UIVideo from '../../videos/ecco_presentation.mp4';
import Icons from '../../images/ecco/icons.svg';
import ProjectNavigation from '../../components/project_navigation';
import Seo from '../../components/seo'

const Ecco = () => {


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

                <img src={MainImage} alt="Ecco" className="w-full h-72 object-cover" />

                <div className='pt-4 px-4 md:pb-6 md:px-12 xl:max-w-screen-2xl xl:mx-auto relative'>
                    <div className='bg-zinc-900 inline-flex w-full md:w-auto flex-col py-4 md:flex-row gap-4 md:gap-8 -translate-y-10 px-8 items-center'>
                        <h1 className='text-zinc-50 font-bold text-xl md:text-3xl inline-block'>Ecco Icon</h1>
                        <span className='h-5 w-[2px] bg-red-600 hidden md:block text-center' />
                        <span className='text-zinc-50 text-lg text-center'>An Animated Icon Pack</span>
                    </div>
                </div>

                <div className='pt-4 px-4 md:pb-12 md:px-12 xl:max-w-screen-2xl xl:mx-auto flex flex-col lg:flex-row gap-16 lg:gap-28'>
                    <div className='w-full lg:w-1/4'>
                        <Description
                            role={'Graphic Designer, UI/UX Designer, Motion Designer, Developer'}
                            duration={'July 2024 - Present'}
                            description={'Ecco Icons is my latest major project—a platform showcasing animated icons designed in After Effects and exported via Lottie. It’s a free project, supported entirely by donations.'}
                            linkActive={true}
                            link={'https://eccoicon.com'}
                            title={'Visit Ecco Icon'}
                        />
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <Brief
                            brief={'Ecco Icons is my latest major project—a platform featuring animated icons crafted in After Effects and exported using Lottie. It’s a free project, sustained entirely by donations. The animations are minimalistic, monochromatic, and perfectly suited for enhancing the UI of apps and websites.'}
                            problem={'Microinteractions and small details matter—they’re what set superstar apps apart from mediocre ones. Unfortunately, many animated icon packs are hidden behind paywalls.'}
                            solution={'Ecco Icons aims to address this issue by offering an ever-expanding collection of minimal animated icons that are 100% free—and will remain free forever. The project is sustained solely by donations.'}
                        />

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>User Interface - User Experience</h2>
                            <p className='text-zinc-50'>
                                Following Jakob’s Law of UX, I didn’t reinvent the wheel or confuse users. The website’s user experience mirrors that of major paid platforms, ensuring familiarity. Users can browse icons, click on the ones they like, and download them in .lottie, .json, .png, .svg, or .aep formats—simple and straightforward. Each icon also has a shareable link, with no unnecessary complexity. Plus, there’s no need to log in or register, keeping the user journey as seamless as possible.
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
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Designing and Animating Icons</h2>
                            <p className='text-zinc-50 mb-2'>
                                The icons are designed to be minimal and perfectly suited for website and app UIs. I kept details to a minimum to ensure they remain clear and recognizable even at small sizes. Each icon is monochromatic by default, but I provide the .aep source file, allowing designers to customize the colors to fit their needs.
                            </p>
                            <p className='text-zinc-50 mb-2'>
                                The design follows a common icon grid standard, similar to Material Design, ensuring consistency and compatibility. Each animation lasts just 3 seconds, making it ideal for seamless looping.
                            </p>
                            <p className='text-zinc-50'>
                                The icons maintain a consistent style, making them ideal for use as a cohesive pack in app and website UIs. They all feature rounded corners, uniform line width, and a friendly, harmonious design.
                            </p>
                            <div className='mt-8 bg-zinc-900 p-4 md:p-10'>
                                <img src={Icons} alt="Icons" className='w-full h-auto' />
                            </div>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Development</h2>
                            <p className='text-zinc-50 mb-2'>
                                The Ecco Icon website is developed using Gatsby, a React-based static site generator. For styling, I used Tailwind CSS, and for animated icons, I integrated the Dotlottie-react library. The site is proudly hosted on Netlify.
                            </p>
                            <p className='text-zinc-50'>
                                Initially, I planned to let users change the color of animated icons directly on the platform. However, the results were often unpredictable and inconsistent across different icons and Lottie libraries. Due to these limitations, I decided to remove the feature and instead provide the .aep file, allowing users to customize colors in After Effects. Interestingly, this approach aligns with what many major paid animated icon packs offer.
                            </p>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Ongoing Evolution</h2>
                            <p className='text-zinc-50 mb-2'>
                                This project is never truly "done"—and I hope it never will be. My goal is to continuously expand the icon pack, adding new icons over time.
                            </p>
                            <p className='text-zinc-50 mb-2'>
                                Throughout this journey, I’ve gained valuable insights into microinteractions, best practices for icon design, and maintaining visual consistency. More importantly, I’ve deepened my understanding of icon animation—exploring the best techniques, the nuances of animating for Lottie, and how to navigate its limitations.
                            </p>
                            <p className='text-zinc-50 mb-2'>
                                The book <strong>Microinteractions by Dan Saffer</strong> and the work of the legendary Japanese graphic designer <strong>Yukio Ota</strong> have been key inspirations, alongside countless articles and resources that shaped this project.
                            </p>
                        </div>

                        <div className='mt-20'>
                            <ProjectNavigation
                                url={'/projects/hathor'}
                                title={'Check Hathor Project'}
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

export default Ecco

export const Head = () => (
    <Seo 
      title="Ecco Icon" 
      description="Ecco Icons is my latest major project—a platform showcasing animated icons designed in After Effects and exported via Lottie. It’s a free project, supported entirely by donations." 
    />
  )