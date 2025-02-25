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
                <div className="technologies-section__title">
                    <h2>
                        TECHNOLOGIES & HARDWARE
                    </h2>
                    <p>
                        USED BY HYDRA VR.
                    </p>
                </div>
            </div>
            
            <Swiper
                modules={[Navigation]}
                spaceBetween={5}
                navigation
                breakpoints={{
                    390: { slidesPerView: 1 }, 
                    768: { slidesPerView: 2 }, 
                    1024: { slidesPerView: 4 }, 
                    
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