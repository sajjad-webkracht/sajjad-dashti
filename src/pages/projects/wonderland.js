import React from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import Scrollup from "../../components/scrollup"
import Button from "../../components/button"
import { Link } from 'gatsby';
import MainImage from '../../images/wonderland/wonderland-presentation.png';
import Brief from '../../components/project_brief';
import Description from '../../components/project_description';
import ReactPlayer from 'react-player';
import UIVideo from '../../videos/wonderland_presentation.mp4';
import Map from '../../images/wonderland/wonderland-map-edited.png';
import Arivaman from '../../images/wonderland/arivaman.png';
import ProjectNavigation from '../../components/project_navigation';
import Seo from '../../components/seo'

const Wonderland = () => {


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
                        <h1 className='text-zinc-50 font-bold text-xl md:text-3xl inline-block'>Wonderland</h1>
                        <span className='h-5 w-[2px] bg-red-600 hidden md:block text-center' />
                        <span className='text-zinc-50 text-lg text-center'>A Blockchain-Based Metaverse Platform</span>
                    </div>
                </div>

                <div className='pt-4 px-4 md:pb-12 md:px-12 xl:max-w-screen-2xl xl:mx-auto flex flex-col lg:flex-row gap-16 lg:gap-28'>
                    <div className='w-full lg:w-1/4'>
                        <Description
                            role={'UI/UX Designer, Illustrator, Graphic Designer'}
                            duration={'July 2022 - August 2023'}
                            description={'I led the design of the UI/UX for Ariva Wonderland, a metaverse platform that allows users to purchase virtual land using cryptocurrencies. Additionally, I created the initial concept for the game’s main character, Arivaman, which was later transformed into a 3D model by the game development team.'}
                            linkActive={true}
                            link={'http://ariva.game/'}
                            title={'Visit Wonderland'}
                        />
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <Brief
                            brief={'Ariva Wonderland is a blockchain-based metaverse platform designed to revolutionize the tourism industry. It offers users a unique travel experience by combining virtual reality (VR) and cryptocurrency. Users can explore various virtual lands, participate in social events, and earn rewards through the platform’s innovative “Travel2Earn” concept.'}
                            problem={'The COVID-19 pandemic has shown how easily our traditional ways of socializing, working, and traveling can be disrupted. These methods lack resilience and adaptability. Additionally, traditional tourism negatively impacts climate change, underscoring the need for sustainable solutions.'}
                            solution={'Ariva Wonderland aims to create a metaverse space where people can socialize and engage in virtual tourism. This platform provides an additional layer of interaction and exploration, complementing real-life experiences. It serves as a backup solution without replacing the value of real-world interactions.'}
                        />

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>User Experience & User Interface </h2>
                            <p className='text-zinc-50'>
                                For Ariva Wonderland, a simple user interface wouldn’t suffice because it was centered around a game—a futuristic 3D platform that demanded innovation. The design needed to be unique and groundbreaking. This gave me the freedom to think outside the box and push creative boundaries, while maintaining close collaboration with the development team to ensure that my bold ideas could be realistically brought to life.
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
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Creating the Map</h2>
                            <p className='text-zinc-50'>
                                One of the most challenging aspects of the UI/UX project for Ariva Wonderland’s website was creating a solution that allowed users to view the virtual world map, purchase, and manage virtual land. This required not only a thoughtful design approach but also close collaboration with the development team to implement these features. Unlike ordinary websites, this project demanded a deep understanding of both design and development processes, as well as extensive communication.
                            </p>
                            <div className='mt-8 bg-zinc-900 px-12 pt-12'> 
                                <img src={Map} alt='Wonderland Map' className='w-full' />
                            </div>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Arivaman Character</h2>
                            <p className='text-zinc-50'>
                                I created the concept design for Arivaman, the main character in the Ariva Wonderland world. Initially illustrated in 2D, the character was later developed into a 3D model by the game development team. Arivaman was designed to embody the adventurous spirit of the Ariva project, making him a unique and integral part of the metaverse.
                            </p>
                            <div>
                                <div class="w-full grid grid-cols-1 grid-rows-3">
                                    <div class="bg-zinc-900 row-start-2 row-end-4 col-start-1 col-end-2"></div>
                                    <img src={Arivaman} alt="" class="row-start-1 row-end-4 col-start-1 col-end-2 m-auto" />
                                </div>
                            </div>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Ariva Wonderland in Future Innovation Summit 2022 - Dubai</h2>
                            <p className='text-zinc-50'>
                            One of the main highlights of Ariva Wonderland’s success was its impactful presentation at the Future Innovation Summit 2022 in Dubai. The project garnered significant attention not only during our CCO’s official presentation but also through interactions with UAE government officials and other technology experts throughout the summit.
                            </p>
                            <div className='mt-8'>
                                <iframe className='w-full' height="315" src="https://www.youtube.com/embed/-mSaaFEVyBk?si=Ta7mIAZeGI65AZ45" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Conclusion</h2>
                            <p className='text-zinc-50'>
                                Ariva Wonderland pushed me to move beyond conventional design approaches and explore creative territories I had never ventured into before. Designing the map, for instance, required not only innovative thinking but also strong collaboration with the development team. Understanding their limitations and finding effective ways to bring ideas to life was crucial. This project was far from simple, presenting unique challenges for both me as a designer and the web development team.
                            </p>
                        </div>

                        <div className='mt-20'>
                            <ProjectNavigation
                                url={'/projects/aloisia'}
                                title={'Check Aloisia Project'}
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

export default Wonderland

export const Head = () => (
    <Seo 
      title="Ariva Wonderland" 
      description="I led the design of the UI/UX for Ariva Wonderland, a metaverse platform that allows users to purchase virtual land using cryptocurrencies. Additionally, I created the initial concept for the game’s main character, Arivaman, which was later transformed into a 3D model by the game development team." 
    />
  )