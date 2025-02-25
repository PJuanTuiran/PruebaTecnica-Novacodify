import ibanner from "../../../assets/IBanner.png";
import { IoMdArrowForward } from "react-icons/io";
import { Grid } from '@mui/material';

function Banner() {
  return (
    <Grid container className="container-banner" spacing={2}>
      <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        <div className="container-banner__item" >
          <div className="container-banner__item__content">
            <h1><span className="title-span__one">Dive</span> Into The Depths <br /> Of <span className="title-span__second">Virtual Reality</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
              sed do eiusmod tempor incididunt ut labore et dolore <br />
              nisl tincidunt eget. Lectus mauris eros in vitae.
            </p>
            <div className="container-btn">
              <button className="container-banner__button">build your world</button>
              <IoMdArrowForward size={40} color="#C0B7E8" />
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div className="container-banner__item--image">
          <img src={ibanner} alt="" />
          <div className="container-banner__item__title">
            <h1><span className="title-span__one">Dive</span> Into The Depths Of <span className="title-span__second">Virtual Reality</span></h1>
          </div>
          <div className="container-btn__responsive">
            <button>build your world</button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Banner;