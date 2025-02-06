import React from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import Scrollup from "../../components/scrollup"
import Button from "../../components/button"
import { Link } from 'gatsby';
import MainImage from '../../images/winee3/winee3-thumbnail.png';
import Brief from '../../components/project_brief';
import Description from '../../components/project_description';
import Winee3Logo from '../../images/winee3/winee3-logo-combined.svg';
import Winee3Colors from '../../images/winee3/winee3-colors.svg';
import Winee3Fonts from '../../images/winee3/winee3-fonts.svg';
import PlayStore from '../../images/winee3/play-store.svg'
import AppStore from '../../images/winee3/app-store.svg'
import Screenshots from '../../images/winee3/winee3-screenshots.png'
import ProjectNavigation from '../../components/project_navigation';
import Seo from '../../components/seo'

const Winee3 = () => {


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
                        <h1 className='text-zinc-50 font-bold text-xl md:text-3xl inline-block'>Winee3</h1>
                        <span className='h-5 w-[2px] bg-red-600 hidden md:block text-center' />
                        <span className='text-zinc-50 text-lg text-center'>A Cutting-Edge SocialFi Super-App </span>
                    </div>
                </div>

                <div className='pt-4 px-4 md:pb-12 md:px-12 xl:max-w-screen-2xl xl:mx-auto flex flex-col lg:flex-row gap-16 lg:gap-28'>
                    <div className='w-full lg:w-1/4'>
                        <Description
                            role={'UI/UX Designer, Branding, Graphic Designer'}
                            duration={'August 2023 - July 2024'}
                            description={'As part of the Winee3 project, I led the branding efforts, infusing the spirit of socializing into the logo, color scheme, and other brand elements. Additionally, I conducted UX research and worked on UI/UX.'}
                            linkActive={true}
                            link={'https://winee3.io/'}
                            title={'Visit Winee3'}
                        />
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <Brief
                            brief={'Winee3 is a cutting-edge SocialFi super-app designed to revolutionize professional networking and event organization through the integration of Web3 technologies, including NFT ticketing. The app aims to create a dynamic and engaging platform where professionals can connect, collaborate, and grow within a thriving digital ecosystem.'}
                            problem={'Traditional networking platforms like LinkedIn are designed for Web2 and lack Web3 payment solutions and tailored experiences. This has led Web3 users to migrate to platforms like X, which aren’t specifically designed for professional Web3 networking, leaving a gap that needs to be filled.'}
                            solution={'Winee3 addresses this by connecting Web3 users like a dating app, allowing them to swipe through profiles and connect. A feed feature lets users create content and discover others based on shared posts. The app also includes in-app Web3 payments and campaigns to grow its user base.'}
                        />

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Branding</h2>
                            <p className='text-zinc-50 mb-2'>
                            The branding for Winee3 was designed to create a more relaxed environment compared to traditional Web2 professional settings, reflecting the casual nature of the Web3 space. The name “Winee3” combines “Wine,” symbolizing a casual connection setup, and “3,” representing Web3. The letter “W” is styled to resemble a wine glass. The logo’s typeface is a modified version of “Pacifico,” originally created by Vernon Adams.
                            </p>
                            <div className='mt-8 bg-zinc-900 p-4 md:p-10'>
                                <div className='mb-10'>
                                    <h3 className='text-zinc-50 font-bold text-lg'>Logo:</h3>
                                    <div className=' flex gap-4 mt-4'>
                                        <img src={Winee3Logo} alt="Winee3 Logo and Icon" className='w-full' />
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-10'>
                                    <div className='w-full md:w-1/2'>
                                        <h3 className='text-zinc-50 font-bold text-lg'>Fonts:</h3>
                                        <div className=' flex gap-4 mt-4'>
                                            <img src={Winee3Fonts} alt="Fonts" className='w-full' />
                                        </div>
                                    </div>
                                    <div className='w-full md:w-1/2'>
                                        <h3 className='text-zinc-50 font-bold text-lg'>Colors:</h3>
                                        <div className=' flex gap-4 mt-4'>
                                            <img src={Winee3Colors} alt="Colors" className='w-full' />
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>User Experience & User Interface </h2>
                            <p className='text-zinc-50'>
                                Based on our UX research and the design principles and personas we developed, we created a design that balances an intuitive approach similar to popular apps like Tinder and X (adhering to Jakob’s Law), while seamlessly integrating Web3 features without overwhelming new users. 
                            </p>
                            <img src={Screenshots} alt='Winee3 Screenshots' className='w-full mt-4' />
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Conclusion</h2>
                            <p className='text-zinc-50 mb-2'>
                                Winee3 wasn’t my first venture into the web3 space, but it presented a unique and intriguing challenge. The goal wasn’t just to cater to seasoned web3 users but also to attract a broader audience, introducing newcomers to this fascinating and dynamic world. Striking the right balance between familiar web2 app conventions and the innovative language and concepts of web3 was a complex yet rewarding task to navigate.
                            </p>
                            <p className='text-zinc-50 mb-2'>
                                Another notable aspect of Winee3 was that, at its peak, we had around 11,000 active users—a significant number by any measure. This provided me with a valuable opportunity to dive deeper into user challenges during my UX research, as I had a larger sample size to analyze. UX research doesn’t stop after the initial development phase; it’s a continuous process. I focused on identifying user pain points and iteratively addressing them in subsequent updates to the app.
                            </p>
                            <p className='text-zinc-50'>
                                The app is available for download and testing on the App Store and Google Play.
                            </p>
                            <div class="flex gap-4 mt-8">
                                <a href="https://apps.apple.com/tr/app/winee3/id6477886704" class=""><img src={AppStore} alt="" /></a>
                                <a href="https://play.google.com/store/apps/details?id=io.winee3.beta" class=""><img src={PlayStore} alt="" /></a>
                            </div>
                        </div>

                        <div className='mt-20'>
                            <ProjectNavigation
                                url={'/projects/wonderland'}
                                title={'Check Wonderland Project'}
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

export default Winee3

export const Head = () => (
    <Seo 
      title="Winee3" 
      description="As part of the Winee3 project, I led the branding efforts, infusing the spirit of socializing into the logo, color scheme, and other brand elements. Additionally, I conducted UX research and worked on UI/UX." 
    />
  )