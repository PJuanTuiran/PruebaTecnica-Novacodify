import "../styles/navBar.css";
import frameLogo from '../../../assets/Frame.png';
import { CgMenuRightAlt } from "react-icons/cg";
import { Drawer, IconButton, useMediaQuery } from '@mui/material';
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from "react-scroll";

function NavBar() {

    const isMdUp = useMediaQuery('(min-width:1075px)');

    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <nav className="nav">
            <div className="nav__logo">
                <img src={frameLogo} alt="" />
                <span className="nav__text">HYDRA</span>
            </div>

            {isMdUp ? (
                <div className="nav_list_main">
                    <ul className="nav__list">
                        <li className="nav__items">
                             <Link to="about" smooth={true} duration={800} offset={-50}>
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav__items">
                            <Link to="services" smooth={true} duration={800} offset={-50}>
                                SERVICES
                            </Link>
                        </li>
                        <li className="nav__items">
                            <Link to="technologies" smooth={true} duration={800} offset={-50}>
                                TECHNOLOGIES
                            </Link>
                        </li>
                        <li className="nav__items">
                            <Link to="howTo" smooth={true} duration={800} offset={-50}>
                               HOW TO
                            </Link>
                        </li>
                    </ul>
                    <div className="nav__btns">
                        <button className="nav__button nav__button--contact"><span>CONTACT US</span></button>
                        <button className="nav__button nav__button--join">JOIN HYDRA</button>
                    </div>
                </div>
            ) : (
                <div className="nav__menu">
                    <span onClick={toggleDrawer(true)}>
                        <CgMenuRightAlt />
                    </span>
                </div>
            )}

            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{ width: '50%' }}
                PaperProps={{
                    sx: { width: '50%' }
                }}
            >
                <div
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <IconButton onClick={toggleDrawer(false)}>
                        <IoIosCloseCircleOutline />
                    </IconButton>

                </div>
            </Drawer>
        </nav>
    )
}
export default NavBar