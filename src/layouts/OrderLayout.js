import Header from "../components/Header";
import SelectedMenus from "../components/SelectedMenus";
import SelectPayment from "../components/SelectPayment";
import Footer from "../components/Footer";

function OrderLayout({ here, setHere, selectedItems, setSelectedItems }) {

    return (
        <>
            <Header
                here={here}
                setHere={setHere}
            />
            <SelectedMenus
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
            />
            <SelectPayment/>
            <Footer/>
        </>
    );
}

export default OrderLayout;