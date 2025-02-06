import * as React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Featured from "../components/featured"
import Cases from "../components/cases"
import Experiences from "../components/experiences"
import Community from "../components/community"
import Footer from "../components/footer"
import Scrollup from "../components/scrollup"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <main className="font-sans bg-black">
      <Header />
      <Hero />
      <Featured />
      <Cases />
      <Experiences />
      <Community />
      <Footer />
      <Scrollup />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo 
    title="Home Page" 
    description="Hi, I’m Sajjad Dashti, a Persian UI/UX designer, illustrator, motion designer, graphic designer and creative developer. I reside in a charming small town in northern Iran." 
  />
)