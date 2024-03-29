import { useEffect, useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";

import Selected from "./Selected";
import SelectedMenusButton from "./SelectedMenusButton";

import style from "./SelectedMenus.module.css";

function SelectedMenus({ selectedItems, setSelectedItems }) {

    const [change, setChange] = useState(false);
    const [isDisplay, setIsDisplay] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const selectedMenusButtonStyle = {
        visibility: selectedItems.length < 4? 'hidden':'visible',
        cursor: selectedItems.length < 4? 'none':'pointer'
    };

    let totalPrice = 0;

    selectedItems.map(
        item => {
            totalPrice += (item.price * item.quantity);
        }
    )
    
    useEffect(
        () => {
            if(selectedItems.length < 4){
                setIsDisplay(false);
            } else {
                setIsDisplay(true);
            }
        },
        [selectedItems]
    );

    const onClickHandler = () => {
        if(selectedItems.length !== 0) {
            alert("모든 메뉴 선택이 취소됩니다.");
        }
        setSelectedItems([])
        if (location.pathname.match("menu")) {
            navigate(location.pathname);
        } else {
            navigate("/menu/burgermenu");
        }
    }

    return (
        <>
            <div className={style.SelectedMenusBox}>
                <div className={style.Selected}>
                    <div className={style.TopBox}>선택된 메뉴</div>
                    <div className={style.LeftButton}>
                        <img src="/images/왼쪽.png" onClick={() => setIsDisplay(false)} className={style.LeftButtonStyle} style={selectedMenusButtonStyle}/>
                    </div>
                    <div className={style.Display}>
                        {selectedItems.slice(isDisplay * 3, (isDisplay + 1) * 3).map(
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
                        <img src="/images/오른쪽.png" onClick={() => setIsDisplay(true)} className={style.RightButtonStyle} style={selectedMenusButtonStyle}/>
                    </div>
                    <div className={style.DisplayButton}>
                        <SelectedMenusButton selectedItems={selectedItems} isDisplay={isDisplay}/>
                    </div>
                </div>
            </div>
            <div className={style.BottomBox}>
                <div className={style.CancelButton} onClick={onClickHandler}>전체 취소</div>
                <p className={style.FrontText}>내실 돈 : </p>
                <p className={style.NextText}>{totalPrice? `${parseInt(totalPrice / 1000)},`:"" }{totalPrice? ((totalPrice % 1000)? totalPrice % 1000: "000"): "0"}원</p>
            </div>
        </>
    );
}

export default SelectedMenus;