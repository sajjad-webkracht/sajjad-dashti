import React from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import Scrollup from "../../components/scrollup"
import Button from "../../components/button"
import { Link } from 'gatsby';
import MainImage from '../../images/hathor/hathor-thumbnail.png';
import Brief from '../../components/project_brief';
import Description from '../../components/project_description';
import ArtistiTouch from '../../images/hathor/artistic-touch.png';
import ProjectNavigation from '../../components/project_navigation';
import Seo from '../../components/seo'

const Hathor = () => {


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

                <img src={MainImage} alt="Hathor" className="w-full h-72 object-cover" />

                <div className='pt-4 px-4 md:pb-6 md:px-12 xl:max-w-screen-2xl xl:mx-auto relative'>
                    <div className='bg-zinc-900 inline-flex w-full md:w-auto flex-col py-4 md:flex-row gap-4 md:gap-8 -translate-y-10 px-8 items-center'>
                        <h1 className='text-zinc-50 font-bold text-xl md:text-3xl inline-block'>Hathor</h1>
                        <span className='h-5 w-[2px] bg-red-600 hidden md:block text-center' />
                        <span className='text-zinc-50 text-lg text-center'>An App for Deliberate Practice</span>
                    </div>
                </div>

                <div className='pt-4 px-4 md:pb-12 md:px-12 xl:max-w-screen-2xl xl:mx-auto flex flex-col lg:flex-row gap-16 lg:gap-28'>
                    <div className='w-full lg:w-1/4'>
                        <Description
                            role={'UI/UX Designer, Branding, Illustrator'}
                            duration={'July 2024 - Sep 2024'}
                            description={'Hathor emerged from my personal experiences and challenges with practicing musical instruments. Hathor is a self-initiated project that will be open-source. It is an app for musicians to have a deliberate practice session.'}
                            linkActive={true}
                            link={'https://www.figma.com/proto/mlQqwmmKpB46IvyLSoAnhG/Hathor---Version-3.0?page-id=67%3A648&node-id=67-650&node-type=frame&viewport=777%2C327%2C0.37&t=fKrofZITXPV9M2gi-1&scaling=scale-down&content-scaling=fixed'}
                            title={'UI/UX Case Study'}
                        />
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <Brief
                            brief={'Hathor is a self-initiated project that will be open-source. It is an app for musicians to have a deliberate practice session, in which they can have a structured practice with focus on different parts of their playing and fixing any issues while slowing down and focusing on an issue instead of mindlessly going through repertoire.'}
                            problem={'The biggest challenge for musicians learning a new instrument is having a deliberate and effective practice session. Often, a lack of structure results in unproductive practice, where repertoire is played mindlessly without addressing crucial technical issues.'}
                            solution={'Hathor addresses this challenge by providing a tool that helps musicians structure their practice sessions, ensuring they stick to the plan and focus on their specific issues. It operates seamlessly in the background, allowing musicians to maintain their focus without distractions.'}
                        />

                        <div class="flex flex-col overflow-hidden items-stretch mt-20">
                            <img src={ArtistiTouch} alt="" class="w-full object-cover" />
                            <div class="text-zinc-50 bg-zinc-900 p-8 lg:p-8 w-full">
                                <h2 class="text-2xl mb-3 font-bold">An Artistic Touch</h2>
                                <p class="text-base">While aiming for a minimal and clean design for the app, I also wanted to infuse it with a touch of vitality. Given its artistic nature, the app needed to reflect that essence. I drew inspiration from classic Art Deco designs and contemporary artists like Mads Berg to craft an illustration that embodies this spirit. The character was inspired by a photo of Bill Evans, one of the greatest jazz pianists of all time.</p>
                            </div>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Interactive Prototype</h2>
                            <p className='text-zinc-50 mb-5'>
                            You can test the app and its user experience here. Real users have repeatedly tested the user experience, and I’ve made changes based on their feedback to reach this iteration. The design life cycle is ongoing, with continuous improvements always possible. This project is dynamic and community-driven, so if you have any suggestions, please reach out at hi@sajjaddashti.ir.
                            </p>
                            <div>
                                <a href='https://www.figma.com/proto/mlQqwmmKpB46IvyLSoAnhG/Hathor---Version-3.0?page-id=5%3A106&node-id=23-2473&node-type=canvas&viewport=452%2C301%2C0.14&t=qmvccV2vH43ylTIU-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=23%3A2473' target='_blank' rel='noreferrer'>
                                    <Button direction={'next'}>
                                        Interactive Prototype
                                    </Button>
                                </a>
                            </div>
                        </div>

                        <div className='my-20'>
                            <iframe className='w-full h-[500px]' src="https://embed.figma.com/proto/mlQqwmmKpB46IvyLSoAnhG/Hathor---Version-3.0?page-id=67%3A648&node-id=67-650&p=f&viewport=333%2C253%2C0.13&scaling=contain&content-scaling=fixed&embed-host=share" allowfullscreen></iframe>
                        </div>



                        <div className='mt-20'>
                            <ProjectNavigation
                                url={'/projects/lilly'}
                                title={'Check Lilly Icon Project'}
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

export default Hathor

export const Head = () => (
    <Seo 
      title="Hathor" 
      description="Hathor emerged from my personal experiences and challenges with practicing musical instruments. Hathor is a self-initiated project that will be open-source. It is an app for musicians to have a deliberate practice session." 
    />
  )