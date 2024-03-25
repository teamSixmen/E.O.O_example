import Selected from "./Selected";

function OrderMenus({ selectedItems, setSelectedItems, change, setChange }) {

    let totalPrice = 0;

    {selectedItems.map(
        item => {
            totalPrice += (item.price * item.quantity);
        }
    )};
    
    return (
        <>
            <h3>selected menus</h3>
            <div>
                {selectedItems.map(
                    selectedItem =>
                        <Selected
                            key={selectedItem.menuCode}
                            item={selectedItem}
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                            change={change}
                            setChange={setChange}
                        />
                )}
            </div>
            <h3>price : {totalPrice}</h3>
        </>
    );
}

export default OrderMenus;