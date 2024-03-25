import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import style from "./Layouts.module.css"

function StandardLayout({here, setHere}) {

    return (
        <>
            <Header
                here={here}
                setHere={setHere}
            />
            <Outlet
                className={style.Back}
            />
            <Footer/>
        </>
    );
}

export default StandardLayout;