import "../styles/navBar.css";
import frameLogo from '../../../assets/Frame.png';
function NavBar() {
  return (
      <nav className="nav">
          <div className="nav__logo">
              <img src={frameLogo} alt="" />
              <span className="nav__text">HYDRA</span>
          </div>
          <lu className="nav__list">
              <li className="nav__items"  ><a href="">About</a></li>
              <li className="nav__items"  ><a href="">Services</a></li>
              <li className="nav__items"  ><a href="">Tecnologies</a></li>
              <li className="nav__items"  ><a href="">How to</a></li>
          </lu>
          <div className="nav__btns">
              <button className="nav__button nav__button--contact"><span>CONTACT US</span></button>
              <button className="nav__button nav__button--join">JOIN HYDRA</button>
          </div>
    </nav>
  )
}
export default NavBar