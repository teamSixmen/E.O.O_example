import Selected from "../components/Selected";

import style from "./SelectedMenus.module.css";

function SelectedMenus({ selectedItems, setSelectedItems, change, setChange }) {

    let totalPrice = 0;

    selectedItems.map(
        item => {
            totalPrice += (item.price * item.quantity);
        }
    )

    return (
        <>
            <div className={style.SelectedMenusBox}>
                <div className={style.Selected}>
                    <div className={style.TopBox}></div>
                    <div className={style.Display}>
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
                </div>
                <div className={style.BottomBox}>
                    <p className={style.FrontText}>내실 돈 : </p>
                    <p className={style.NextText}>{totalPrice? `${parseInt(totalPrice / 1000)},`:"" }{totalPrice? ((totalPrice % 1000)? totalPrice % 1000: "000"): "0"}원</p>
                </div>
            </div>
        </>
    );
}

export default SelectedMenus;