import ibanner from "../../../assets/IBanner.png";
import { IoMdArrowForward } from "react-icons/io";
function Banner() {
  return (
      <div className="container-banner">
          <div className="container-banner__item container-banner__item--text">
              <h1><span className="title-span__one">Dive</span> Into The Dept hs Of <span className="title-span__second">Virtual Reality</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore 
                  nisl tincidunt eget. Lectus mauris eros in vitae .
              </p>
              <div className="container-btn">
                  <button className="container-banner__button">build your word</button>
                  <IoMdArrowForward size={40} color="#C0B7E8" />
                </div>
          </div>
          <div className="container-banner__item">
              <img src={ibanner} alt="" />
          </div>
          
    </div>
  )
}
export default Banner