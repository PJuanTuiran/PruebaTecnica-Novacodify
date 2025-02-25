import "../styles/howTo.css"
import arrow from "../../../assets/Arrow.png"
import axios from "axios"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoMdArrowForward } from "react-icons/io";
function HowTo() {
  return (
      <>
          <section className="howTo">
              <div className="howTo-container">
                <div className="howTo-container__title">
                    <h2>HOW WE BUILD</h2>
                    <div className="howTo-container__subtitle">
                        <p>WITH HYDRA VR?</p>
                        <div>
                          <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
                <p>
                    Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
                </p> 
      
              </div>
              
              <Swiper
                modules={[Navigation]}
                spaceBetween={5}
                navigation
                breakpoints={{
                    390: { slidesPerView: 1 }, // Una sola carta en pantallas pequeñas
                    768: { slidesPerView: 2 }, // Dos cartas en tablets
                    1024: { slidesPerView: 4 }, // Tres cartas en pantallas grandes
                    // Cuatro cartas en pantallas de 1440px o más
            }}
        >
                
                        
                  <SwiperSlide >
                      <div className="howTo__items">
                          <p className="first">01</p>
                          <div>
                            <IoMdArrowForward size={20} color="#C0B7E8" />
                              
                              <p>3D Conception<br></br> & Design</p>
                          </div>
                        
                    </div>             
                </SwiperSlide>
                  <SwiperSlide>
                      <div className="howTo__items">
                          <p className="first">02</p>
                          <div>
                            <IoMdArrowForward size={20} color="#C0B7E8" />
                              <p>3D Conception<br></br> & Design</p>
                          </div>
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                 <div className="howTo__items">
                          <p className="first">03</p>
                          <div>
                            <IoMdArrowForward size={20} color="#C0B7E8" />
                               <p>3D Conception<br></br> & Design</p>
                          </div>
                   
                  </div>         
                </SwiperSlide>
                <SwiperSlide >
                 <div className="howTo__items">
                          <p className="first">04</p>
                          <div>
                            <IoMdArrowForward size={20} color="#C0B7E8" />
                              <p>3D Conception<br></br> & Design</p>
                          </div>
                    
                  </div>         
                </SwiperSlide>
                    
                    
                </Swiper>
          </section>
      
      </>
  )
}
export default HowTo