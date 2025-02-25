import "../styles/footer.css";
import frameLogo from '../../../assets/Frame.png';
function Footer() {
    return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo */}
        <div className="footer__logo line">
          <img src={frameLogo} alt="Hydra Logo" className="footer__logo-img" />
        </div>

        {/* Menú */}
        <div className="footer__menu line">
          <ul className="footer__list">
            <li className="footer__item">ABOUT</li>
            <li className="footer__item">SERVICES</li>
            <li className="footer__item">TECHNOLOGIES</li>
            <li className="footer__item">HOW TO</li>
            <li className="footer__item">JOIN HYDRA</li>
          </ul>
        </div>

        {/* Links Adicionales */}
        <div className="footer__links line">
          <ul className="footer__list">
            <li className="footer__item">F.A.Q</li>
            <li className="footer__item">SITEMAP</li>
            <li className="footer__item">CONDITIONS</li>
            <li className="footer__item">LICENSES</li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="footer__social">
          <p className="footer__social-title">SOCIALIZE WITH HYDRA</p>
          <div className="footer__icons">
            <i className="footer__icon fab fa-facebook"></i>
            <i className="footer__icon fab fa-twitter"></i>
            <i className="footer__icon fab fa-linkedin"></i>
            <i className="footer__icon fab fa-youtube"></i>
            <i className="footer__icon fab fa-instagram"></i>
            <i className="footer__icon fab fa-pinterest"></i>
          </div>
          <button className="footer__button">BUILD YOUR WORLD</button>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}
export default Footer