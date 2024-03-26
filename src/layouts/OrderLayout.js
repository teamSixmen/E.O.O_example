import Header from "../components/Header";
import SelectPayment from "../components/SelectPayment";
import Footer from "../components/Footer";
import OrderMenus from "../components/SelectedMenus";

import style from "./Layouts.module.css";

function OrderLayout({ here, setHere, selectedItems, setSelectedItems, change, setChange, isDisplay, setIsDisplay}) {

    return (
        <>
            <Header
                here={here}
                setHere={setHere}
                setSelectedItems={setSelectedItems}
            />
            <OrderMenus
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                change={change}
                setChange={setChange}
                isDisplay={isDisplay}
                setIsDisplay={setIsDisplay}
            />
            <SelectPayment/>
            <Footer/>
        </>
    );
}

export default OrderLayout;