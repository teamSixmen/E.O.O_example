import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import style from "./Selected.module.css";
import { useState } from "react";

function Selected({item, selectedItems, setSelectedItems, change, setChange, isTrue }) {

    // const [temp,setTemp] = useState([]);

    // let selectedTemp;

    // if( !isTrue ) {
    //     selectedTemp = selectedItems.slice(0,3);
    //     setTemp(selectedTemp);
    // }

    // if( isTrue ) {
    //     selectedTemp = selectedItems.slice(3,6);
    //     setTemp(selectedTemp);
    // }

    const index = selectedItems.findIndex(function(selected){return selected.menuCode === item.menuCode});

    const navigate = useNavigate();

    const location = useLocation();

    const onClickMinusButton = () => {
                
        if (item.quantity === 1) {
            alert("order canceled");
            let copiedItems = selectedItems;
            copiedItems[index].quantity -= 1;
            const removedItems = copiedItems.filter(item => item.quantity !== 0);
            setSelectedItems(removedItems);
            if (location.pathname.match("menu")) {
                navigate(location.pathname);
            } else {
                navigate("/menu/burgermenu");
            }
        } else {
            // console.log("minus");
            let copiedItems = selectedItems;
            copiedItems[index].quantity -= 1;
            setSelectedItems(copiedItems);
            setChange(!change);
        }
    };
    
    const onClickPlusButton = () => {
        
        // console.log("plus");
        let copiedItems = selectedItems;
        copiedItems[index].quantity += 1;
        setSelectedItems(copiedItems);
        setChange(!change);
    }

    return (
        <>
            <div className={style.Selected}>
                <img src="/images/temp.jpg" width="90px"/>
                <br/>{item.menuName}<br/>
                <div 
                    onClick={onClickMinusButton}
                    className={style.Button}
                >
                    -
                </div>
                수량 : {item.quantity} 
                <div
                    onClick={onClickPlusButton}
                    className={style.Button}
                >
                    +
                </div>
            </div>
        </>
    );
}

export default Selected;