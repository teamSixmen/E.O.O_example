import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import style from "./Navbar.module.css";

function Navbar() {

    const location = useLocation();

    return (
        <>
            <div className={style.NavbarBox}>
                <NavLink to="burgermenu" style={{textDecoration: "none"}}>
                    <div 
                        className={style.NavBox}
                        style={{backgroundColor: (location.pathname === "/menu/burgermenu")? "rgba(255, 184, 0, 1)":"rgba(241, 241, 241, 1)"}}
                    >버거
                </div></NavLink>
                <NavLink to="chickenmenu" style={{textDecoration: "none"}}>
                    <div
                        className={style.NavBox}
                        style={{backgroundColor: (location.pathname === "/menu/chickenmenu")? "rgba(255, 184, 0, 1)":"rgba(241, 241, 241, 1)"}}
                    >치킨
                </div></NavLink>
                <NavLink to="setmenu" style={{textDecoration: "none"}}>
                    <div
                        className={style.NavBox}
                        style={{backgroundColor: (location.pathname === "/menu/setmenu")? "rgba(255, 184, 0, 1)":"rgba(241, 241, 241, 1)"}}
                    >세트
                </div></NavLink>
                <NavLink to="sidemenu" style={{textDecoration: "none"}}>
                    <div
                        className={style.NavBox}
                        style={{backgroundColor: (location.pathname === "/menu/sidemenu")? "rgba(255, 184, 0, 1)":"rgba(241, 241, 241, 1)"}}
                    >사이드
                </div></NavLink>
                <NavLink to="drinkmenu" style={{textDecoration: "none"}}>
                    <div
                        className={style.NavBox}
                        style={{backgroundColor: (location.pathname === "/menu/drinkmenu")? "rgba(255, 184, 0, 1)":"rgba(241, 241, 241, 1)"}}
                    >음료
                </div></NavLink>
            </div>
        </>
    );
} 

export default Navbar;