import { useEffect, useState } from "react";

import Set from "./Set";

import { getSideMenus } from "../api/MenuAPI";
import { getDrinkMenus } from "../api/MenuAPI";

import style from "./Modal.module.css";

function Modal({ product, selectedItems, setSelectedItems, change, setChange, modalOpen, setModalOpen, modalBackground, isDisplay, setIsDisplay}) {

    const [count, setCount] = useState(1);
    const [isSet, setIsSet] = useState(false);
    const [addSide, setAddSide] = useState(401);
    const [addDrink, setAddDrink] = useState(501);

    const [sideMenus, setSideMenus] = useState([]);
    const [drinkMenus, setDrinkMenus] = useState([]);

    const sideIndex = sideMenus.findIndex(function(selected){return selected.menuCode === addSide});
    const drinkIndex = drinkMenus.findIndex(function(selected){return selected.menuCode === addDrink});

    useEffect(
        () => {
            setSideMenus(getSideMenus());
            setDrinkMenus(getDrinkMenus());
        },
        []
    )
    
    const onClickMinusButton = () => {
                
        if (count === 1) {
            alert("선택을 취소합니다.");
            setModalOpen(false);
        } else {
            setCount(count - 1);
        }

        if ( isDisplay ) {
            setIsDisplay(!isDisplay);
        }
    };
    
    const onClickPlusButton = () => {
        
        setCount(count + 1);
    };

    const onClickHandler = () => {

        const index = 
            isSet?
            selectedItems.findIndex(function(selected){return selected.menuCode === product.menuCode * 100 + ((addSide - 401) * 10) + (addDrink - 501)}):
            selectedItems.findIndex(function(selected){return selected.menuCode === product.menuCode});

        if (index !== -1) {
            // console.log("plus");
            let copiedItems = selectedItems;
            copiedItems[index].quantity += count;
            setSelectedItems(copiedItems);
            setChange(!change);
            // console.log(selectedItems);
        } else {
            if (selectedItems.length < 6) {
                // console.log("add");
                if (!isSet) {
                const changedItems = [...selectedItems, 
                    {"menuCode": product.menuCode, 
                     "menuName": product.menuName, 
                     "price": product.price,
                     "quantity": count}];
                setSelectedItems(changedItems);
                setChange(!change);
                // console.log(selectedItems);
                } else if (isSet) {
                    const changedItems = [...selectedItems,
                    {"menuCode": product.menuCode * 100 + ((addSide - 401) * 10) + (addDrink - 501),
                    "menuName": product.menuName.concat("세트(", (addSide - 401), (addDrink - 501),")"),
                    "price": product.price + sideMenus[sideIndex].price + drinkMenus[drinkIndex].price - 500,
                    "quantity": count}];
                setSelectedItems(changedItems);
                setChange(!change);
                }
            } else {
                alert("장바구니가 가득 찼습니다.");
            }
        }
        setCount(1);
        setModalOpen(false);
        setIsSet(false);
        setAddSide(401);
        setAddDrink(501);
    };

    return (
        <>
        {
            modalOpen &&
            <div
                className={style.Container}
                ref={modalBackground}
                onClick={e => {
                    if (e.target === modalBackground.current) {
                        setModalOpen(false);
                    }
                }}
            >
                <div className={style.Content}>
                    <div className={style.Outer}>
                        <div className={style.Picture}>
                            <img src="/images/temp.jpg" width="150px"/>
                        </div>
                        <div className={style.Text}>
                            <h3>{product.menuName}</h3>
                            <h3>{parseInt(product.price / 1000)},{(product.price % 1000)? product.price % 1000:"000"}원</h3>
                            <div 
                                onClick={onClickMinusButton}
                                className={style.Button}
                            >
                                -
                            </div>
                            수량 : {count} 
                            <div
                                onClick={onClickPlusButton}
                                className={style.Button}
                            >
                                +
                            </div>
                        </div>
                    </div>
                    <div className={style.Descript}>
                        <p>{product.detail.description}</p>
                    </div>
                    <div className={style.Add}>
                        <Set
                            key={product.menuCode}
                            item={product}
                            isSet={isSet}
                            setIsSet={setIsSet}
                            addSide={addSide}
                            setAddSide={setAddSide}
                            addDrink={addDrink}
                            setAddDrink={setAddDrink}
                        />
                    </div>
                    <div className={style.ButtonBox}>
                        <div
                            onClick={onClickHandler}
                            className={style.SquareBox}
                            style={{backgroundColor: "rgba(255, 184, 0, 1)"}}
                        >추가</div>
                        <div
                            onClick={() => {
                                setModalOpen(false)
                                setCount(1)
                                setIsSet(false);
                                setAddSide(401);
                                setAddDrink(501);
                            }}
                            className={style.SquareBox}
                        >닫기</div>
                    </div>
                </div>
            </div>
        }
        </>
    );
}

export default Modal;