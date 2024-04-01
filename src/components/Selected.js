import { useNavigate, useLocation } from "react-router-dom";

import style from "./Selected.module.css";

function Selected({item, selectedItems, setSelectedItems, change, setChange }) {

    const navigate = useNavigate();
    const location = useLocation();

    const index = selectedItems.findIndex(function(selected){return selected.menuCode === item.menuCode});

    const onClickMinusButton = () => {
                
        if (item.quantity === 1) {
            alert("선택이 취소됩니다.");
            let copiedItems = selectedItems;
            copiedItems[index].quantity -= 1;
            const removedItems = copiedItems.filter(item => item.quantity !== 0);
            setSelectedItems(removedItems);
            if (location.pathname.match("menu")) {
                navigate(location.pathname);
            } else {
                (selectedItems.length === 1)? navigate("/menu/burgermenu"):navigate("/order");
            }
        } else {
            let copiedItems = selectedItems;
            copiedItems[index].quantity -= 1;
            setSelectedItems(copiedItems);
            setChange(!change);
        }
    };
    
    const onClickPlusButton = () => {
        
        let copiedItems = selectedItems;
        copiedItems[index].quantity += 1;
        setSelectedItems(copiedItems);
        setChange(!change);
    };

    const onClickCancel = () => {
        let copiedItems = selectedItems;
        const removedItems = copiedItems.filter(product => product.menuCode !== item.menuCode);
        setSelectedItems(removedItems);
        alert("선택이 취소됩니다.");
        if (location.pathname.match("menu")) {
            navigate(location.pathname);
        } else {
            (selectedItems.length === 1)? navigate("/menu/burgermenu"):navigate("/order");
        }
    }

    return (
        <>
            <div className={style.Selected}>
                <img src={item.image} height="90px"/>
                <br/>{item.menuName}<br/>
                <div 
                    onClick={onClickMinusButton}
                    className={style.Button}
                >
                    -
                </div>
                수량 : <span className={style.QuantityStyle}>{item.quantity}</span>
                <div
                    onClick={onClickPlusButton}
                    className={style.Button}
                >
                    +
                </div>
                <div
                    className={style.Cancel}
                    onClick={onClickCancel}
                >
                    선택취소
                </div>
            </div>
        </>
    );
}

export default Selected;