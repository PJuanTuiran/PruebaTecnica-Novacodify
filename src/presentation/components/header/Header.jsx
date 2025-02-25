import Banner from "./Banner"
import NavBar from "./NavBar"
import "../styles/header.css";
import FooterBanner from "./FooterBanner";
function Header() {
  return (
      <>
        <header className="header">
              <NavBar />
              <Banner />
              <FooterBanner />
        </header>
      
      </>
  )
}
export default Header