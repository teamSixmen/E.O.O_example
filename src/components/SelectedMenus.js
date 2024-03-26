import { useEffect, useState } from "react";
import Selected from "../components/Selected";

import style from "./SelectedMenus.module.css";
import SelectedMenusButton from "./SelectedMenusButton";

function SelectedMenus({ selectedItems, setSelectedItems, change, setChange }) {

    const [isTrue,setIsTrue] = useState(false);
    const [temp,setTemp] = useState([]);

    let totalPrice = 0;

    selectedItems.map(
        item => {
            totalPrice += (item.price * item.quantity);
        }
    )

    const onClickLeftButton = () => {
        const selectedTemp = selectedItems.slice(0,3);
        setIsTrue(false);
        setTemp(selectedTemp);
    }
    
    const onClickRightButton = () => {
        if( selectedItems.length > 3 ) {
            const selectedTemp = selectedItems.slice(3,6);
            setIsTrue(true);
            setTemp(selectedTemp);
        }
    }
    
    useEffect(()=>{
        if(!isTrue){
            const selectedTemp = selectedItems.slice(0,3);
            setTemp(selectedTemp);
        } else {
            const selectedTemp = selectedItems.slice(3,6);
            setTemp(selectedTemp);
        }
    },[selectedItems])

    return (
        <>
            <div className={style.SelectedMenusBox}>
                <div className={style.Selected}>
                    <div className={style.TopBox}></div>
                    <div className={style.LeftButton}>
                        <button onClick={onClickLeftButton} className={style.LeftButtonStyle}>좌</button>
                    </div>
                    <div className={style.Display}>
                        {temp.map(
                            selectedItem =>
                                <Selected
                                    key={selectedItem.menuCode}
                                    item={selectedItem}
                                    selectedItems={selectedItems}
                                    setSelectedItems={setSelectedItems}
                                    change={change}
                                    setChange={setChange}
                                    isTrue={isTrue}
                                />
                        )}
                    </div>
                    <div className={style.RightButton}>
                        <button onClick={onClickRightButton} className={style.RightButtonStyle}>우</button>
                    </div>
                    <div className={style.DisplayButton}>
                        <SelectedMenusButton selectedItems={selectedItems} isTrue={isTrue}/>
                    </div>
                </div>
            </div>
            <div className={style.BottomBox}>
                <p className={style.FrontText}>내실 돈 : </p>
                <p className={style.NextText}>{totalPrice? `${parseInt(totalPrice / 1000)},`:"" }{totalPrice? ((totalPrice % 1000)? totalPrice % 1000: "000"): "0"}원</p>
            </div>
        </>
    );
}

export default SelectedMenus;