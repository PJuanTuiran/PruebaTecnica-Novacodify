import axios from "axios"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/servicesUs.css";
import arrow from "../../../assets/Arrow.png"

function ServicesUs() {

    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const fetchServices = async () => {
            
            try {
                const response = await axios.get("http://localhost:5000/services")
                if (response.status !== 200) {
                    throw new Error("Fetch services failed")
                };
                
                const data = response.data
                console.log(response)
                setServices(data)
                
            } catch (error) {
                console.error(error)

                
            } finally {
                setLoading(false)
            }
        }
        fetchServices()
    }, [])
    console.log(services)
    return (
        
        <section className="services__section--us">
            <div className="services_titles">
                <div>
                    <h2>WHY BUILD</h2>
                    <div className="services_titles--arrow">
                        <p>WITH HYDRA?</p>
                        <img src={arrow} alt="" />
                    </div>
                </div>
                <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
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
        
      {services.map((card) => (
        <SwiperSlide key={card.id}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="service">
                  <div className="service__section">
                          <header className="service__header">
                            <img src={card.img} alt="" />
                        </header>
                      <div className="service__body">
                          <h4>{ card.title}</h4>
                          <p>{card.description}</p>
                          <button>TRY IT NOW</button>
                        </div>
                    </div>
                
          </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
            
        </section>
  
  )
}
export default ServicesUs