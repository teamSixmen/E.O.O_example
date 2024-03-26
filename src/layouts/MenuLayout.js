import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import SelectedMenus from "../components/SelectedMenus";
import Order from "../components/Order"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import style from "./Layouts.module.css";

function MenuLayout({ here, setHere, selectedItems, setSelectedItems, change, setChange, isDisplay, setIsDisplay}) {

    return (
        <>
            <Header
                here={here}
                setHere={setHere}
                setSelectedItems={setSelectedItems}
            />
            <SelectedMenus
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                change={change}
                setChange={setChange}
                isDisplay={isDisplay}
                setIsDisplay={setIsDisplay}
            />
            <Order
                selectedItems={selectedItems}
            />
            <div
                className={style.MenuInner}
            >
                <Navbar/>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default MenuLayout;