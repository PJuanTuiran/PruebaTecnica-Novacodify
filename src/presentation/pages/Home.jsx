import About from "../components/about/About"
import Footer from "../components/Footer/Footer"
import Header from "../components/header/Header"
import HowTo from "../components/howTo/HowTo"
import JoinForm from "../components/joinForm/JoinForm"
import Section from "../components/sectionSmooth/Section"
import ServicesUs from "../components/services/ServicesUs"
import Tecnologies from "../components/technologies/Tecnologies"

 
function Home() {
  return (
      <>
          
          <Section>
              <Header />
            </Section>
          <main className="main">
            <Section id="about" >
                  <About />
              </Section>
              <Section id="services">
                  <ServicesUs/>
              </Section>
                <Section id="technologies">
                  <Tecnologies />
              </Section>
              <Section id="howTo">
                  <HowTo/>
                </Section>
              <Section id="join">
                  <JoinForm />
                </Section>
          </main>
          <Section>
              <Footer/>
          </Section>
          
          
      
      </>
  )
}
export default Home