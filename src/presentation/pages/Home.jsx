import About from "../components/about/About"
import Footer from "../components/Footer/Footer"
import Header from "../components/header/Header"
import HowTo from "../components/howTo/HowTo"
import JoinForm from "../components/joinForm/JoinForm"
import ServicesUs from "../components/services/ServicesUs"
import Tecnologies from "../components/technologies/Tecnologies"

 
function Home() {
  return (
      <>
          <Header/>
          <main className="main">
              <About/>
              <ServicesUs/>
              <Tecnologies />
              <HowTo/>
              <JoinForm/>
          </main>
          <Footer/>
          
          
      
      </>
  )
}
export default Home