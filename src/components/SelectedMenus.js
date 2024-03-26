import { useEffect, useState } from "react";
import Selected from "../components/Selected";

import style from "./SelectedMenus.module.css";
import SelectedMenusButton from "./SelectedMenusButton";

function SelectedMenus({ selectedItems, setSelectedItems, change, setChange, isDisplay, setIsDisplay }) {

    const [temp,setTemp] = useState([]);

    const selectedMenusButtonStyle = {
        visibility: selectedItems.length<4?'hidden':'visible',
        cursor: selectedItems.length<4?'none':'pointer'
    }

    let totalPrice = 0;

    selectedItems.map(
        item => {
            totalPrice += (item.price * item.quantity);
        }
    )
    
    let selectedTemp;

    const onClickLeftButton = () => {
        setIsDisplay(false);
        selectedTemp = selectedItems.slice(0,3);
        setTemp(selectedTemp);
    }
    
    const onClickRightButton = () => {
        setIsDisplay(true);
        selectedTemp = selectedItems.slice(3,6);
        setTemp(selectedTemp);
    }
    
    useEffect(()=>{
        if(selectedItems.length<4){
            const selectedTemp = selectedItems.slice(0,3);
            setTemp(selectedTemp);
            setIsDisplay(false);
        } else {
            const selectedTemp = selectedItems.slice(3,6);
            setTemp(selectedTemp);
            setIsDisplay(true);
        }
    },[selectedItems])

    return (
        <>
            <div className={style.SelectedMenusBox}>
                <div className={style.Selected}>
                    <div className={style.TopBox}></div>
                    <div className={style.LeftButton}>
                        <img src="/images/왼쪽.png" onClick={onClickLeftButton} className={style.LeftButtonStyle} style={selectedMenusButtonStyle}/>
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
                                />
                        )}
                    </div>
                    <div className={style.RightButton}>
                        <img src="/images/오른쪽.png" onClick={onClickRightButton} className={style.RightButtonStyle} style={selectedMenusButtonStyle}/>
                    </div>
                    <div className={style.DisplayButton}>
                        <SelectedMenusButton selectedItems={selectedItems} isDisplay={isDisplay}/>
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