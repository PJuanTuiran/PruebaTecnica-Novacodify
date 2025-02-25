import "../styles/joinForm.css";

function JoinForm() {
   return (
    <div className="join-hydra">
      <div className="join-hydra__container">
        <h2 className="join-hydra__title">JOIN HYDRA</h2>
        <div className="join-hydra__underline"></div> {/* Línea decorativa */}
        <p className="join-hydra__subtitle">Let’s Build Your VR Experience</p>
        <form className="join-hydra__form">
          <div className="join-hydra__group">
            <input type="text" placeholder="First Name" className="join-hydra__input" />
            <input type="text" placeholder="Last Name" className="join-hydra__input" />
          </div>
          <div className="join-hydra__group">
            <input type="email" placeholder="Email" className="join-hydra__input" />
            <input type="text" placeholder="Phone Number" className="join-hydra__input" />
          </div>
          <input type="text" placeholder="Subject" className="join-hydra__input join-hydra__input--full" />
          <textarea placeholder="Tell Us Something..." className="join-hydra__textarea"></textarea>
          <button className="join-hydra__button">SEND TO HYDRA</button>
        </form>
      </div>
    </div>
  );
}
export default JoinForm