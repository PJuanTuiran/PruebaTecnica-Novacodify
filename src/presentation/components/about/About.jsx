import iabout from "../../../assets/IAbout.png"
import arrow from "../../../assets/Arrow.png"
import "../styles/about.css";
function About() {
  return (
      <div className="about">
          <div className="about__items about__items--intro">
              <div className="about__title-intro">
                   <h2>INTRODUCTION</h2>
                    <div className="about__items--arrow">
                      <p>TO HYDRA VR</p>
                      <img src={arrow} alt="" />
                    </div>
             </div>
              <p className="about__paragraph-intro">
                  Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
              </p>
          </div>
          <div className="about__items about__items--about">
              <div className="about__items--about__img">
                  <img src={iabout} alt="" />
              </div>
              <div className="about__text" >
                  <div>
                      <h2 className="about__items--about__title">ABOUT</h2>
                      <p>HYDRA VR</p>
                  </div>
                  <p className="about__items--about__paragraph">Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi n tempor.</p>
                  <button className="about__items--about__button">
                      LET’S GET IN TOUCH
                  </button>
              </div>
              
          </div>
    </div>
  )
}
export default About