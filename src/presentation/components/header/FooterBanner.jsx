import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
function FooterBanner() {
  return (
      <div className="footer-banner">
          
         
          
        <Swiper
                modules={[Navigation]}
                spaceBetween={5}
                navigation
                breakpoints={{
                    390: { slidesPerView: 1 }, // Una sola carta en pantallas pequeñas
                    768: { slidesPerView: 1 }, // Dos cartas en tablets
                    1024: { slidesPerView: 3 }, // Tres cartas en pantallas grandes
                    // Cuatro cartas en pantallas de 1440px o más
                    }}
                >
                          
                                  
                <SwiperSlide >
                    <div className="footer-banner__items">
                        <div>
                            <IoLocationOutline className="footer-banner__icon" />
                    </div>
                    <div>
                        <h4>Pay Us a Visit</h4>
                        <p>Union St, Seattle, WA 98101, United States</p>
                    </div>
                    </div>          
              </SwiperSlide>
                <SwiperSlide >
                     <div className="footer-banner__items footer-banner__items--after">
                        <div><FiPhoneCall className="footer-banner__icon" /></div>
                        <div>
                            <h4>Give Us a Call</h4>
                            <p>(110) 1111-1010</p>
                        </div>
                    </div>        
              </SwiperSlide>
                <SwiperSlide >
                    <div className="footer-banner__items">
                        <div ><MdMailOutline className="footer-banner__icon" /></div>
                        <div>
                            <h4>Send Us a Message</h4>
                            <p>Contact@HydraVTech.com</p>
                        </div>
                    </div>         
              </SwiperSlide>
              </Swiper>
    </div>
  )
}
export default FooterBanner