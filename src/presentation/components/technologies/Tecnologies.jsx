import axios from "axios"
import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/technologies.css";
import tech from "../../../assets/tech.png"

function Tecnologies() {
  const [technologies, setTechnologie] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const technologiesFetch = async () => {
            try {
                const response = await axios.get("http://localhost:5000/technologies")
                if (response.status !== 200) {
                    throw new Error("Fetch Technologies failed")
                };
                
            const data = response.data
            console.log(response)
            setTechnologie(data)
                
            } catch (error) {
                console.error(error)

                
            }
        }
        technologiesFetch()
    }, [])
    console.log(technologies)
    return (
        
        <section className="technologies-section">
            <div className="technologies-section__img">
                <img src={tech} alt="" />
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
                <div className="tenchnologies-section__container" >
                        {technologies.map((card) => (
                            <SwiperSlide key={card.id}>
                                
                                    <article className="tenchnologies-section__item" >
                                        <img src={card.img} alt="" />
                                    </article>
                                
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                
        </section>
  
  )
}
export default Tecnologies