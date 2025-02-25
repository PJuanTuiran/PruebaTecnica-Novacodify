import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
function FooterBanner() {
  return (
      <div className="footer-banner">
          <div className="footer-banner__items r">
              <div>
                  <IoLocationOutline className="footer-banner__icon" />
            </div>
            <div>
                <h4>Pay Us a Visit</h4>
                <p>Union St, Seattle, WA 98101, United States</p>
            </div>
          </div>
          <div className="footer-banner__items footer-banner__items--after">
            <div><FiPhoneCall className="footer-banner__icon" /></div>
            <div>
                <h4>Give Us a Call</h4>
                <p>(110) 1111-1010</p>
            </div>
          </div>
          <div className="footer-banner__items">
            <div ><MdMailOutline className="footer-banner__icon" /></div>
            <div>
                <h4>Send Us a Message</h4>
                <p>Contact@HydraVTech.com</p>
            </div>
          </div>
    </div>
  )
}
export default FooterBanner