import React from 'react';
import Header from "../../components/header"
import Footer from "../../components/footer"
import Scrollup from "../../components/scrollup"
import Button from "../../components/button"
import { Link } from 'gatsby';
import MainImage from '../../images/aloisia/aloisia-presentation.png';
import Brief from '../../components/project_brief';
import Description from '../../components/project_description';
import Find from '../../images/aloisia/aloisia-find.png';
import Product from '../../images/aloisia/aloisia-product.png';
import ProjectNavigation from '../../components/project_navigation';
import Seo from '../../components/seo'

const Aloisia = () => {


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
                        <h1 className='text-zinc-50 font-bold text-xl md:text-3xl inline-block'>Aloisia</h1>
                        <span className='h-5 w-[2px] bg-red-600 hidden md:block text-center' />
                        <span className='text-zinc-50 text-lg text-center'>A Healthcare Company</span>
                    </div>
                </div>

                <div className='pt-4 px-4 md:pb-12 md:px-12 xl:max-w-screen-2xl xl:mx-auto flex flex-col lg:flex-row gap-16 lg:gap-28'>
                    <div className='w-full lg:w-1/4'>
                        <Description
                            role={'UI/UX Designer'}
                            duration={'April 2021 - June 2021'}
                            description={'As the UI/UX Designer at Webkracht, I had the opportunity to work on the user interface and user experience for Aloisia, a company dedicated to enhancing health through natural supplements.'}
                            linkActive={true}
                            link={'https://aloisia.be/'}
                            title={'Visit Aloisia'}
                        />
                    </div>
                    <div className='w-full lg:w-3/4'>
                        <Brief
                            brief={'Aloisia, a healthcare company with decades of experience in providing medical supplements, sought to modernize their business. They aimed to create a platform that would allow for more direct interaction with customers, enabling them to recommend and deliver the right supplements to the right people.'}
                            problem={'The main issue with many supplement platforms is that they offer a wide variety of products, making it difficult for users to determine which supplement is best suited for their age, gender, and specific health concerns. As a result, users often need to conduct extensive research on their own to decide what to purchase.'}
                            solution={'Based on our UX research and competitive analysis, the ideal solution we identified is to develop a system where users can easily input their age, gender, and describe their situation. This system would avoid overwhelming users with lengthy forms and provide a tailored list of supplements based on the information provided.'}
                        />

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Designing an Intuitive Experience to Find the Right Supplement</h2>
                            <p className='text-zinc-50'>
                                Interacting with the platform shouldn’t be limited to a boring, soulless form. Humans engage better with visuals, making the experience more engaging and user-friendly. With this in mind, we designed a system where users can specify their gender, age, and the area of the body they need supplements for, all through a visual interface. Users are represented as 3D characters, allowing them to connect better and have a more memorable experience.
                            </p>
                            <div className='mt-8'>
                                <img src={Find} alt="Find" className="w-full" />
                            </div>
                        </div>

                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Being Creative Without Reinventing the Wheel</h2>
                            <p className='text-zinc-50'>
                                One of the biggest challenges in designing any user experience is to offer unique and better solutions while adhering to Jakob’s Law. Users can feel overwhelmed if a product deviates too much from familiar norms. Therefore, we kept our product pages and purchase process similar to other shopping websites, ensuring a seamless and intuitive experience without unnecessary innovation. We limited our unique creative UX solutions to the ‘Finding the Right Supplement’ part shown above.
                            </p>
                            <div className='mt-8'>
                                <img src={Product} alt="Product" className="w-full" />
                            </div>
                        </div>



                        <div className='mt-20'>
                            <h2 className='text-2xl font-bold mb-3 text-zinc-50'>Conclusion</h2>
                            <p className='text-zinc-50'>
                                Aloisia was a fantastic opportunity to work within the constraints of traditional website design while still striving to innovate and find better solutions to meet user needs. The biggest challenge of this project was striking the right balance between creativity and maintaining the familiar user interface expectations that users rely on.
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

export default Aloisia

export const Head = () => (
    <Seo 
      title="Aloisia" 
      description="As the UI/UX Designer at Webkracht, I had the opportunity to work on the user interface and user experience for Aloisia, a company dedicated to enhancing health through natural supplements." 
    />
  )