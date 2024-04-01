import Header from "../components/Header";
import SelectedMenus from "../components/SelectedMenus";
import SelectPayment from "../components/SelectPayment";
import Footer from "../components/Footer";

function OrderLayout({ here, setHere, selectedItems, setSelectedItems, change, setChange }) {

    return (
        <>
            <Header
                here={here}
                setHere={setHere}
            />
            <SelectedMenus
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                change={change}
                setChange={setChange}
            />
            <SelectPayment
                selectedItems={selectedItems}
                change={change}
            />
            <Footer/>
        </>
    );
}

export default OrderLayout;